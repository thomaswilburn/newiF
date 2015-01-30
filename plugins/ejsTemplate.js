var fs = require("fs");
var _ = require("underscore");

module.exports = function(env, done) {
  var EJS = function(html) {
    this.template = _.template(html);
  }
  EJS.prototype = Object.create(env.TemplatePlugin);
  EJS.prototype.render = function(context, callback) {
    var data = Object.create(context);
    data.include = function(path, o) {
      var file = fs.readFileSync(path, { encoding: "utf8" });
      var fn = _.template(file);
      var d = Object.create(data);
      o = o || {};
      for (var key in o) {
        d[key] = o[key];
      }
      try {
        return fn(d);
      } catch (err) {
        return err;
      }
    };
    try {
      var html = this.template(data);
    } catch (err) {
      return callback(err);
    }
    // console.log(data.contents);
    callback(null, new Buffer(html));
  };
  
  EJS.fromFile = function(path, c) {
    var file = fs.readFileSync(path.full, { encoding: "utf8" });
    c(null, new EJS(file));
  }
  
  env.registerTemplatePlugin("**/*.ejs", EJS);
  //env.registerTemplatePlugin("**/*.html", EJS);
  
  done();
}
