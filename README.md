# disinfo.quaidorsay.fr

Landing page and [encyclopedia](https://disinfo.quaidorsay.fr/encyclopedia) of `disinfo.quaidorsay.fr`. Other experiments listed on the website have their own repository on the [AmbaNum GitHub organization](https://github.com/ambanum).

> La page d'accueil et l'[encyclopédie](https://disinfo.quaidorsay.fr/encyclopedia) du site `disinfo.quaidorsay.fr`. Les autres expériences présentées sur le site ont leur propre dépôt dans l'[organisation Github AmbaNum](https://github.com/ambanum).

## Encyclopedia

The encyclopedia is a collaborative resource which aims at empowering all actors countering information manipulation to grow and improve. In this repository you can find the content in `_pages/en/encyclopedia`.
[More information on how to contribute to the encyclopedia](CONTRIBUTING.md).

> L'encyclopédie est une ressource ouverte et collaborative qui documente les meilleures pratiques, outils et acteurs, permettant à toutes les personnes qui luttent contre la manipulation de l'information d'améliorer la compétence de l'écosystème tout entier.

- - -

## Development

This site is built with [Jekyll](https://jekyllrb.com/), a static site generator. The version used is the one [currently in production](https://pages.github.com/versions/) on GitHub Pages.

To improve it, install [Ruby](https://www.ruby-lang.org/fr/) and [Jekyll](https://jekyllrb.com) in their [production versions](https://pages.github.com/versions/).

If the installation of `nokogiri` is problematic with the system versions of `libxml`, you can try to install [rbenv](https://github.com/rbenv/rbenv) by combining a new installation with the environment variable `NOKOGIRI_USE_SYSTEM_LIBRARIES` set to `true`.

Then clone this repository, install dependencies and run the server:
```sh
git clone https://github.com/AmbaNum/disinformation-encyclopedia.git
cd disinformation-encyclopedia
gem install bundler --no-ri --no-rdoc
bundle install
bundle exec jekyll serve
```

## Deployment

Deployment is done with [GitHub Pages](https://pages.github.com). Just push to the `master` branch to deploy on `ambanum.github.io`.

An Nginx reverse proxy is set up on `disinfo.quaidorsay.fr` to serve the content deployed on `ambanum.github.io`.

- - -

# License

- The code for this software is distributed under the European Union Public Licence (EUPL) v1.2.

- Encyclopedia content and illustrations in this repository are distributed under an CC-BY-SA 2.0 license. That means you are free to share (copy and redistribute the material in any medium or format), to adapt (remix, transform, and build upon the materialfor any purpose, even commercially.) as long as you attribute to *Office of the French Ambassador for Digital Affairs* (You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.) and you share alike (If you remix, transform, or build upon the material, you must distribute your contributions under a license compatible with the original.).

Contact the author if you have any specific need or question regarding licensing.
