TypeScript Template Project
===========================

This is a template TypeScript project that combines a variety
of useful tools that I like to use.

Usage
=====

Clone this repository and copy the files to your own (new)
repository. You don't want to fork the repository and use
that.

Then, find all instances of ``XXX`` and replace them with
the appropriate text for your project.

Installing Tools
================

To use this, you will need a few tools installed (via ``npm``)::

    npm install -g grunt-cli
    npm install -g tsd

Then, you need to install all of the packages that this project
depends upon::

    npm install

Build Tool
==========

This template uses the `Grunt`_ task runner.

Linting
=======

Both `JSHint`_ and `tslint`_ are used. ``JSHint`` is run on the
Gruntfile (and can be run on all JS in the future). ``tslint``
is run on all TypeScript code in the ``src`` and ``test``
directories.

``JSHint`` is configured within the ``Gruntfile.js``.

``tslint`` is configured within the ``conf/tslint.json`` file.

Both linters are run by ``grunt lint`` and when ``grunt`` is
run with no arguments.

Documentation
=============

Documentation is generated via `typedoc`_. It uses Markdown
and has basic `documentation comment markup`_ support.

To generate documentation, run::

    grunt docs

Testing
=======

Testing is done with `Mocha`_. To run tests, run::

    grunt test

Tests should be written in TypeScript and placed under
the ``test`` directory.

TypeScript Definitions
======================

When using external JavaScript libraries, you often want
to provide TypeScript definitions to have accurate type
information. These are usually provided by the `DefinitelyTyped`_
project.

TypeScript definitions are managed via the `tsd`_ tool
and we provide 2 separate configurations:

* ``conf/tsd-lib.json``
* ``conf/tsd-test.json``

When installing new definitions, you will need to specify which
configuration file to use when running the ``tsd`` tool::

    tsd --config conf/tsd-test.json query mocha --save --action install

.. _Grunt: http://gruntjs.com/
.. _JSHint: http://jshint.com/
.. _tslint: https://www.npmjs.com/package/tslint
.. _typedoc: http://typedoc.io/
.. _documentation comment markup: http://typedoc.io/guides/doccomments.html
.. _Mocha: http://mochajs.org/
.. _DefinitelyTyped: http://definitelytyped.org/
.. _tsd: http://definitelytyped.org/tsd/
