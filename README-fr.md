
# disinfo.quaidorsay.fr

- - -
[English](README.md), [Français](README-fr.md)
- - -

Dépôt de la page d'accueil et de l'[encyclopédie](https://disinfo.quaidorsay.fr/encyclopedia) du site disinfo.quaidorsay.fr, les interfaces des autres expériences disponibles sur le site ont leur propre dépôt que vous pouvez trouver sur l'[organisation Github AmbaNum](https://github.com/ambanum).

L'encyclopédie est une ressource collaborative qui vise à donner à tous les acteurs qui luttent contre la manipulation de l'information les moyens de se développer et de s'améliorer. Dans ce dépôt, vous pouvez trouver le contenu dans `_pages/fr/encyclopedia`.

## Development

Ce site est construit avec [Jekyll](https://jekyllrb.com/), un générateur de site statique. La version utilisée est celle[actuellement en production](https://pages.github.com/versions/) sur GitHub Pages.

Pour l'améliorer, installez [Ruby](https://www.ruby-lang.org/fr/) et [Jekyll](https://jekyllrb.com) dans leurs [versions de production](https://pages.github.com/versions/).
Si l'installation de `nokogiri` pose problème avec les versions système de `libxml`, vous pouvez essayer d'installer [rbenv](https://github.com/rbenv/rbenv) en combinant une nouvelle installation avec la variable d'environnement `NOKOGIRI_USE_SYSTEM_LIBRARIES` réglée sur `true`.

Clonez ensuite ce dépôt, installez les dépendances et exécutez le serveur :
```sh
git clone https://github.com/AmbaNum/disinformation-encyclopedia.git
cd disinformation-encyclopedia
gem install bundler --no-ri --no-rdoc
bundle install
bundle exec jekyll serve
```

Vous pouvez aller sur http://127.0.0.1:4000/ pour voir le résultat.

## Déploiement

Le déploiement se fait via [GitHub Pages](https://pages.github.com). Il suffit de push sur la branche `master` pour déployer sur `ambanum.github.io`.

Un reverse proxy `Nginx` est mis en place sur `disinfo.quaidorsay.fr` pour servir le contenu déployé sur `ambanum.github.io`.

- - -

# License

- Le code de ce logiciel est distribué sous licence publique de l'Union européenne (EUPL) v1.2.

- Le contenu de l'encyclopédie est lui distribué sous licence CC-BY-SA 2.0. Cela signifie que vous êtes libre de partager (copier, distribuer et communiquer le matériel par tous moyens et sous tous formats), d'adapter (remixer, transformer et développer le contenu pour n'importe quel usage, même commercial.) tant que vous attribuez à *Office of the French Ambassador for Digital Affairs* (Vous devez donner le crédit approprié, fournir un lien vers la licence, et indiquer si des changements ont été apportés. Vous devez indiquer ces informations par tous les moyens raisonnables, sans toutefois suggérer que l'Offrant vous soutient ou soutient la façon dont vous avez utilisé son Oeuvre.) et vous partagez de les mêmes conditions (Dans le cas où vous effectuez un remix, que vous transformez, ou créez à partir du matériel composant le contenu original, vous devez diffuser l'Oeuvre modifiée dans les même conditions, c'est à dire avec la même licence avec laquelle le contenu original a été diffusé.).

Contactez l'auteur si vous avez un besoin spécifique ou une question concernant la licence.
