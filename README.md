# **musterknabe** is my collection repository for gulpfile and frontend styling ‘wisdom’ (anno domini 2017, thus a little outdated)

_think development notes, scaffolding, sample project_

A reference collection of my frontend styling experience. No rocket science, but useful to keep a reference in one place with all those learning on the go :) Easier than hiding the stuff in “development notes” in some way.

## styles:

What to bring in first, what last and how to modularize the entire thing in a meaningful order (not just random globbing), see [master.styl](app/stylus/master.styl)
  * a good set of [common (tag-level) styling](app/stylus/_common.styl)
  * how obstrusive/decent to work with [single-purpose ‘atomic classes’](app/stylus/_atomic.styl)
  * distinguishing (more common) [layout helpers](app/stylus/_layout.styl) from [section-specific styling](app/stylus/_section.styl)
  * a unified styling approach to [buttons and button-looking tags](app/stylus/_button.styl)
  * basics of [form design](app/stylus/_form.styl) **TODO**
  * [breakpoints](app/stylus/_breakpoint.styl) and responsive principles

## sprites
  * efficient [normal and retina resolution sprites](app/stylus/_sprite.styl)
  * efficient use of a few [print view styling classes](app/stylus/_print.styl)

## general npm / nodejs / package / project stuff

* a reference [.gitignore](https://github.com/github/gitignore) and [.editorconfig](http://editorconfig.org/)
* a good [„cheat sheet“](gulpfile.js) gulpfile scenario
  * live reload, source maps, minification
  * and all of that in the right order and with the right dependency rigging

----
## Usage

Well... mostly this is about looking up stuff, but anyway, to run:

`gulp scss` — to build scss (aka sass) styles

`gulp stylus` — to build [stylus](http://stylus-lang.com/) styles

use switch `--type production` to get minified styles (under same name).
stylesheet `<link>` in index.html still needs manual adjustment.

`npm start` — automatically runs server.js (since no npm script target defined), opening on port 3000 (or respective env.PORT override)

`gulp watch-stylus` – does just that. I use the [Chrome LiveReload plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) for automatic refresh. (doesn't inject extra code into the page like browsersync did, rather listens on another (high) port and gets notified on changes there)

----
### TODO — styles

  - [ ] div-ish reset for html5 tags (aside, main, figure, figcaption, ...)
  - [ ] Have typical breadcrumb (wrapped, and plain ul-li)
  - [ ] Reference Photoshop Action for saving x3, x2, x1
  - [ ] form styling
    - [ ] fancy radios and checkboxes
  - [ ] updates sass corresponding stuff

### TODO - gulpfile

 * [ ] explicit, submittable html version (excempt from gitignore)
 * [ ] finish dev vs. production output (`--type production` resp. [cross-]env)
 * [ ] further minification matters
 * [ ] revisit watch

----
## License

With the exceptions listed directly below, the contents of this project are released under the (very permissive) terms of the [MIT license](LICENSE). The MIT License is simple and easy to understand and it places almost no restrictions on what you can do with the Project.

* This project uses the [Ubuntu Font Family](http://font.ubuntu.com/) (see [licence file](http://font.ubuntu.com/licence/)).

