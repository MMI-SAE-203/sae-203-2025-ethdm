/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // remove field
  collection.fields.removeById("text1312636911")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select1312636911",
    "maxSelect": 1,
    "name": "role_inv",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Acteur",
      "Réalisateur",
      "Animateur"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1312636911",
    "max": 0,
    "min": 0,
    "name": "role_inv",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select1312636911")

  return app.save(collection)
})
