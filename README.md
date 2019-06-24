# L'encyclopédie de la désinformation

## Développement

Ce site est construit avec [Jekyll](https://jekyllrb.com/), un générateur de sites statiques. La version utilisée est celle [actuellement en production](https://pages.github.com/versions/) sur GitHub Pages.

Pour l'améliorer, installer [Ruby](https://www.ruby-lang.org/fr/) et [Jekyll](https://jekyllrb.com) dans leurs [versions de production](https://pages.github.com/versions/) :

```sh
git clone https://github.com/AmbaNum/disinformation-encyclopedia.git
cd disinformation-encyclopedia
gem install bundler --no-ri --no-rdoc
bundle install
bundle exec jekyll serve
```

Dans l'éventualité où l'installation de nokogiri poserait problème avec les versions système de `libxml`, vous pouvez tenter d'installer [rbenv](https://github.com/rbenv/rbenv) en combinant une nouvelle installation avec la variable d'environnement `NOKOGIRI_USE_SYSTEM_LIBRARIES` mise à `true`.

Un thème est utilisé. Pour les pages indépendantes du thème, les fichiers pertinents pour une modification de la présentation sont probablement dans les dossiers `_layouts` et `css`.


## Déploiement

La mise en production est faite via [GitHub Pages](https://pages.github.com). Il suffit de pousser sur la branche `master` pour déployer sur `ambanum.github.io`.

Un reverse proxy est mis en place sur `desinfo.quaidorsay.fr` pour servir le contenu déployé sur `ambanum.github.io`.

- - - - - - -

# License

- The code for this software is distributed under the European Union Public Licence (EUPL) v1.2.

- Encyclopedia content in this repository are distributed under an CC-BY-SA 2.0 license. That means you are free to share (copy and redistribute the material in any medium or format), to adapt (remix, transform, and build upon the materialfor any purpose, even commercially.) as long as you attribute to *Office of the French Ambassador for Digital Affairs* (You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.) and you share alike (If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.).

Contact the author if you have any specific need or question regarding licensing.
