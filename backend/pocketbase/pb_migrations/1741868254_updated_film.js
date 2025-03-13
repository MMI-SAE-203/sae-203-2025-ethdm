/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("file1538156393")

  // add field
  collection.fields.addAt(13, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url1538156393",
    "name": "ba_film",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file1538156393",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "ba_film",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // remove field
  collection.fields.removeById("url1538156393")

  return app.save(collection)
})
