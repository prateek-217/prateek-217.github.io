# Jekyll Gemfile - Performance Optimized
source "https://rubygems.org"

# Core Jekyll
gem "jekyll", "~> 4.3.0"

# Performance & SEO Plugins
group :jekyll_plugins do
  # Core plugins
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-seo-tag", "~> 2.8"
  
  # Development plugins
  gem "jekyll-include-cache", "~> 0.2"
end

# Platform-specific gems
platforms :windows do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Windows-specific gems
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# JRuby-specific gems
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Development gems (optional)
group :development do
  gem "jekyll-serve", "~> 1.0.0.rc1"
  gem "webrick", "~> 1.7"
end
