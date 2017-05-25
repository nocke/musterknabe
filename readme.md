# **musterknabe** is my collection repository for gulpfile and frontend styling ‘wisdom’

_think development notes, scaffolding, sample project_

## a reference collection of my frontend styling experience:
  * what to bring in first, what last
  * how to modularize the entire thing, see [_master.styl](app/stylus/_master.styl)
  * a good set of [common (tag-level) styling](app/stylus/common.styl)
  * how obstrusive/decent to work with [single-purpose ‘atomic classes’](app/stylus/atomic.styl)
  * distinguishing (more common) [layout helpers](app/stylus/layout.styl) from [section-specific styling](app/stylus/section.styl)
  * a unified styling approach to [buttons and button-looking tags](app/stylus/button.styl)
  * basics of [form design](app/stylus/form.styl) **TODO**
  * [breakpoints](app/stylus/breakpoint.styl) and responsive principles **TODO**
  * efficient [normal and retina resolution sprites](app/stylus/sprite.styl)
  * efficient use of a few [print view styling classes](app/stylus/print.styl)

* a reference [.gitignore](https://github.com/github/gitignore) and [.editorconfig](http://editorconfig.org/)
* a blueprint for common gulpfile scenarios
  * live reload, source maps, minification
  * and all of that in the right order and with the right dependency rigging

... all no rocket science, but useful to keep a reference in one place with all those learning on the go :)


- [ ] Have typical breadcrumb (wrapped, and plain ul-li)
  - Reference Photoshop Action for saving)
- [x] div-ish reset for html5 tags (aside, main, figure, figcaption, ...)

# TODO

## TODO - gulpfile

 * [ ] explicit, submittable html version (excempt from gitignore)
 * [ ] rig dev vs. production switches
 * [ ] proper error lines on stylus error (the respective include)
 * [ ] minification matters
 * [ ] stub for proxy-Browsersync

## TODO - stylus

 * stylus syntax errors point to master.styl, not the actual include culprit
 * form styling
   * fancy checkbox, fancy readie

## TODO - sass / less

 * everything (conversion)

————
This project uses the [Ubuntu Font Family](http://font.ubuntu.com/) ([licence file](http://font.ubuntu.com/licence/)).

