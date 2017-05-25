# local and in-context classes

## A) in-context cluster

_trivial class names in a cetain known context_

_(just examples so far)_
```
ul
	.plain
	.plain-inline

.col-group
	.col-small      _additional attribute_
	.col1, .col2

```

----
## B) in-context global

_classes re-used or redefined in a global(-ish) scope_
```
.menu
        .breadcrumb-outer
                .breadcrumb   // fancy comment, what this is

        .first    (menu's)
                .second
                        .third

        .foo-tabs
                active
                default

        footer
                .col
```
