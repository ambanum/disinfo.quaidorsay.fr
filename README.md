# disinfo.quaidorsay.fr

Landing page of `disinfo.quaidorsay.fr`. Other experiments listed on the website have their own repository on the [AmbaNum GitHub organization](https://github.com/ambanum).

> La page d'accueil du site `disinfo.quaidorsay.fr`. Les autres expériences présentées sur le site ont leur propre dépôt dans l'[organisation Github AmbaNum](https://github.com/ambanum).

- - -

## Development

This site is built with [Jekyll](https://jekyllrb.com/), a static site generator. The version used is the one [currently in production](https://pages.github.com/versions/) on GitHub Pages.

To improve it, install [Ruby](https://www.ruby-lang.org/fr/) and [Jekyll](https://jekyllrb.com) in their [production versions](https://pages.github.com/versions/).

Then clone this repository, install dependencies and run the server:
```sh
git clone https://github.com/AmbaNum/disinfo.quaidorsay.fr.git
cd disinfo.quaidorsay.fr
gem install bundler --no-document
bundle install
bundle exec jekyll serve
```

### Scripta Manent

In order to develop on scripta manent, you will need to install parcel
```sh
npm install -g parcel-bundler
```

#### Development
Watch Scripta Manent file and dist folder will be rebuilt every time you make a change to the file
```
cd assets
parcel watch ./js/open-terms-archive/scripta-manent.js
```

#### Deployment
When done, you can build Scripta Manent file
```
cd assets
parcel build ./js/open-terms-archive/scripta-manent.js
```

## Deployment

Deployment is done with [GitHub Pages](https://pages.github.com). Just push to the `master` branch to deploy on `ambanum.github.io`.

An Nginx reverse proxy is set up on `disinfo.quaidorsay.fr` to serve the content deployed on `ambanum.github.io`.

## Trouleshooting

If the installation of `nokogiri` is problematic with the system versions of `libxml`, you can try to install [rbenv](https://github.com/rbenv/rbenv) by combining a new installation with the environment variable `NOKOGIRI_USE_SYSTEM_LIBRARIES` set to `true`.

To install Xcode, Homebrew, Git, a Ruby manager (chruby, rbenv, RVM), Rails, Jekyll on macOS (including M1 Apple Silicon) please follow [this tutorial] (https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/#step-2-install-chruby-and-the-latest-ruby-with-ruby-install)

- - -

# License

The code for this software is distributed under the European Union Public Licence (EUPL) v1.2.

Contact the author if you have any specific need or question regarding licensing.

