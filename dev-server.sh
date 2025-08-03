#!/bin/bash

# Jekyll Development Server Management Script
# Usage: ./dev-server.sh [start|stop|restart|clean|status]

SITE_DIR="/Users/prateek.rajput/CodingProjects/MyWebsites/prateek-217.github.io"
PID_FILE="$SITE_DIR/.jekyll.pid"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if Jekyll is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Function to get Jekyll process info
get_status() {
    if is_running; then
        local pid=$(cat "$PID_FILE")
        echo "Jekyll server is running (PID: $pid)"
        echo "Server URL: http://localhost:4000"
        echo "LiveReload URL: http://localhost:35729"
    else
        echo "Jekyll server is not running"
    fi
}

# Function to stop Jekyll server
stop_server() {
    print_status "Stopping Jekyll server..."
    
    # Kill any Jekyll processes
    pkill -f "jekyll serve" 2>/dev/null
    pkill -f "jekyll" 2>/dev/null
    
    # Remove PID file
    rm -f "$PID_FILE"
    
    # Wait a moment for processes to stop
    sleep 2
    
    print_success "Jekyll server stopped"
}

# Function to clean Jekyll cache and build files
clean_jekyll() {
    print_status "Cleaning Jekyll cache and build files..."
    
    cd "$SITE_DIR"
    
    # Remove Jekyll build directories
    rm -rf _site
    rm -rf .sass-cache
    rm -rf .jekyll-cache
    rm -rf .jekyll-metadata
    
    # Clean bundler cache
    bundle exec jekyll clean 2>/dev/null || jekyll clean 2>/dev/null
    
    print_success "Cleanup completed"
}

# Function to start Jekyll server
start_server() {
    print_status "Starting Jekyll development server..."
    
    cd "$SITE_DIR"
    
    # Check if Gemfile exists and install dependencies
    if [ -f "Gemfile" ]; then
        print_status "Installing/updating gems..."
        bundle install --quiet
    fi
    
    # Start Jekyll server with live reload
    print_status "Starting server with live reload..."
    nohup bundle exec jekyll serve \
        --host=127.0.0.1 \
        --port=4000 \
        --livereload \
        --livereload-port=35729 \
        --incremental \
        --watch \
        > /tmp/jekyll-$(date +%s).log 2>&1 &
    
    # Save PID
    echo $! > "$PID_FILE"
    
    # Wait for server to start
    sleep 3
    
    if is_running; then
        print_success "Jekyll server started successfully!"
        echo ""
        print_status "🌐 Server URLs:"
        echo "   Local:    http://localhost:4000"
        echo "   Network:  http://$(hostname -I | awk '{print $1}'):4000"
        echo "   LiveReload: http://localhost:35729"
        echo ""
        print_status "📝 Logs: ./dev-server.sh logs"
        print_status "🛑 Stop: ./dev-server.sh stop"
    else
        print_error "Failed to start Jekyll server"
        echo "Check logs: cat $SITE_DIR/jekyll.log"
        exit 1
    fi
}

# Function to restart server
restart_server() {
    print_status "Restarting Jekyll server..."
    stop_server
    clean_jekyll
    start_server
}

# Function to show logs
show_logs() {
    local latest_log=$(ls -t /tmp/jekyll-*.log 2>/dev/null | head -1)
    if [ -n "$latest_log" ]; then
        print_status "Showing logs from: $latest_log"
        tail -f "$latest_log"
    else
        print_warning "No log file found"
    fi
}

# Main script logic
case "${1:-start}" in
    start)
        if is_running; then
            print_warning "Jekyll server is already running"
            get_status
        else
            start_server
        fi
        ;;
    stop)
        if is_running; then
            stop_server
        else
            print_warning "Jekyll server is not running"
        fi
        ;;
    restart)
        restart_server
        ;;
    clean)
        if is_running; then
            print_warning "Stopping server before cleanup..."
            stop_server
        fi
        clean_jekyll
        print_status "Run './dev-server.sh start' to start the server"
        ;;
    status)
        get_status
        ;;
    logs)
        show_logs
        ;;
    *)
        echo "Jekyll Development Server Management"
        echo ""
        echo "Usage: $0 [command]"
        echo ""
        echo "Commands:"
        echo "  start     Start the Jekyll server (default)"
        echo "  stop      Stop the Jekyll server"
        echo "  restart   Stop, clean, and start the server"
        echo "  clean     Clean cache and build files"
        echo "  status    Show server status"
        echo "  logs      Show server logs (live)"
        echo ""
        echo "Examples:"
        echo "  $0                 # Start server"
        echo "  $0 restart         # Full restart with cleanup"
        echo "  $0 logs            # View live logs"
        ;;
esac