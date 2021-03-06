var development       = './dist';
// browsersync - open: false, local, tunnel
// for local tunnel::
// tunnel:true, online: true

module.exports = {
      browsersync: {
        development: {
          server: {
            baseDir: [development]
          },
          port: 9999,
          files: [
            development + '/*.css',
            development + '/js/**',
            development + '/img/**',
            development + '/index.html'
          ],
          tunnel:false,
          online:false,
          open: 'local'
        }
      },
      compass: {
          src: './scss/**/*.scss',
          dest: development,
          options: {
            css: development,
            sass: 'scss',
            image: development + '/img',
            bundleExec: true,
            sourcemap: true,
            debug: false          
          }
      
      },
      autoprefixer: {
        browsers: [
          'last 2 versions',
          'safari 5',
          'ie 8',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4'
        ],
        cascade: true
      },
      scripts:{
        src:[
          './bower_components/jquery-legacy/jquery.min.js',
          './bower_components/modernizr/modernizr.js',
          './js/**/*.js', 
          '!js/**/*.min.js'
        ],
        dest: development
      },
      images: {
        src:  './img/**/*',
        dest: development + '/img'
      },
      html: {
        src: './tmpl/**/!(_)*.jade',
        dest: development
      },
      watch: {
        compass: './scss/**/*.scss',
        scripts: './js/**/*.js',
        images: './img/**/*',
        html: './tmpl/**/*.jade'
        //svg:     'vectors/*.svg'
      }
};