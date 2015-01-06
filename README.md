vegaasen_com_version5
=====================

# Information

Version 5 of my homepage. The plan _this_ time is to make everything as lightweight as possible. There will be no Wordpress integration or anything.
I will include a link to my blog etc, but thats it - as the blog is not actually a blog - more like a .. um, well place to make notez.
^-- the blog will most likely change as well, as I dont see the point of it :-P

## Performance

These are the requirements that I strive to apply:

* < 80kb
* no pointless large js frameworks
* minified all kinds of stuff

# Build the thingie

Just run the following command in order to build the shait:

  npm install grunt
  npm install grunt-cli
  npm install grunt-contrib-less
  npm install grunt-contrib-htmlmin
  npm install grunt-contrib-uglify
  npm install grunt-contrib-watch

When thats done, just run grunt from the project-home :-)

# Generating smaller images

In order to generate smaller images, I use my own fancy script for Macs :-P which essentially just uses sips.
It can be found here:
(you may use whatever you'd like to use when smallifying images.. :-))
https://gist.github.com/vegaasen/7504361

Use it like this:

  ./smallify.sh /path/to/where-ever/resources/img/deltas 400 *.jpg

# Working with the code

This stuff uses Grunt in order to compile the less sources and uglify the scripts on the fly. Just do the following in order to make stuff work out of the box:

  grunt

Thats it :-) Then you can open browser at the desired location, and you're set!

Note that Grunt will as default tasks compile the less and js-files for the first time

# IDE

* vim
* atom

# Technologies

* nodejs
* less
* uglify
* html5
* css3
* homebrew
* some JS-framework..if needed at all..?
* grunt to minify and compile the less stuff
* jsTestDriver for the test-framework

# Acknowledgements

Vegard Aasen, vegaasen@gmail.com, @vegaasen, www.vegaasen.com
