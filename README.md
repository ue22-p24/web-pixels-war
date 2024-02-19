# ue22-pixel-war

Sujet de TP aux Mines de Paris, ue22-p23.

Remplir les TODO dans le js, puis dans le css.

## l'API

On utilise principalement deux fonctions de l'API

* `http://pixels-war.oie-lab.net/getmap`  
  pour obtenir - entre autres - toute la map; vous recevrez aussi un `id`, que vous allez repasser ensuite à la même fonction:
  * `http://pixels-war.oie-lab.net/getmap?id=mon-identifiant`  
    et qui cette fois va vous répondre, non pas toute la map, mais la liste des pixels qui ont changé depuis la dernière fois que cet identifiant-là a émis cet appel
* `http://pixels-war.oie-lab.net/set/id/x/y/r/g/b`  
  pour changer la couleur du pixel en *(i, j)* avec la couleur *(r, g, b)*  
  cet appel échoue si le même id a déjà changé un pixel il y a moins d'une seconde
