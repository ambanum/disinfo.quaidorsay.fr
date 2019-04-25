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
