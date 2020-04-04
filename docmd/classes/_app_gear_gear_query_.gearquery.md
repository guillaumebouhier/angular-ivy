[my-app](../README.md) › [Globals](../globals.md) › ["app/gear/gear.query"](../modules/_app_gear_gear_query_.md) › [GearQuery](_app_gear_gear_query_.gearquery.md)

# Class: GearQuery <**EntityType, IDType**>

## Type parameters

▪ **EntityType**

▪ **IDType**

## Hierarchy

* QueryEntity‹[GearState](../interfaces/_app_gear_gear_store_.gearstate.md)›

  ↳ **GearQuery**

## Index

### Constructors

* [constructor](_app_gear_gear_query_.gearquery.md#constructor)

### Properties

* [__store__](_app_gear_gear_query_.gearquery.md#__store__)
* [config](_app_gear_gear_query_.gearquery.md#config)
* [store](_app_gear_gear_query_.gearquery.md#protected-store)
* [ui](_app_gear_gear_query_.gearquery.md#ui)

### Methods

* [createUIQuery](_app_gear_gear_query_.gearquery.md#createuiquery)
* [getActive](_app_gear_gear_query_.gearquery.md#getactive)
* [getActiveId](_app_gear_gear_query_.gearquery.md#getactiveid)
* [getAll](_app_gear_gear_query_.gearquery.md#getall)
* [getCount](_app_gear_gear_query_.gearquery.md#getcount)
* [getEntity](_app_gear_gear_query_.gearquery.md#getentity)
* [getHasCache](_app_gear_gear_query_.gearquery.md#gethascache)
* [getValue](_app_gear_gear_query_.gearquery.md#getvalue)
* [hasActive](_app_gear_gear_query_.gearquery.md#hasactive)
* [hasEntity](_app_gear_gear_query_.gearquery.md#hasentity)
* [select](_app_gear_gear_query_.gearquery.md#select)
* [selectActive](_app_gear_gear_query_.gearquery.md#selectactive)
* [selectActiveId](_app_gear_gear_query_.gearquery.md#selectactiveid)
* [selectAll](_app_gear_gear_query_.gearquery.md#selectall)
* [selectCount](_app_gear_gear_query_.gearquery.md#selectcount)
* [selectEntity](_app_gear_gear_query_.gearquery.md#selectentity)
* [selectEntityAction](_app_gear_gear_query_.gearquery.md#selectentityaction)
* [selectError](_app_gear_gear_query_.gearquery.md#selecterror)
* [selectFirst](_app_gear_gear_query_.gearquery.md#selectfirst)
* [selectHasCache](_app_gear_gear_query_.gearquery.md#selecthascache)
* [selectLast](_app_gear_gear_query_.gearquery.md#selectlast)
* [selectLoading](_app_gear_gear_query_.gearquery.md#selectloading)
* [selectMany](_app_gear_gear_query_.gearquery.md#selectmany)

## Constructors

###  constructor

\+ **new GearQuery**(`store`: [GearStore](_app_gear_gear_store_.gearstore.md)): *[GearQuery](_app_gear_gear_query_.gearquery.md)*

*Overrides void*

*Defined in [src/app/gear/gear.query.ts:8](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/gear/gear.query.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`store` | [GearStore](_app_gear_gear_store_.gearstore.md) |

**Returns:** *[GearQuery](_app_gear_gear_query_.gearquery.md)*

## Properties

###  __store__

• **__store__**: *any*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[__store__](_app_gear_gear_query_.gearquery.md#__store__)*

*Overrides void*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:25

___

###  config

• **config**: *QueryConfigOptions*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[config](_app_gear_gear_query_.gearquery.md#config)*

Defined in node_modules/@datorama/akita/src/query.d.ts:72

___

### `Protected` store

• **store**: *[GearStore](_app_gear_gear_store_.gearstore.md)*

*Overrides void*

*Defined in [src/app/gear/gear.query.ts:9](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/gear/gear.query.ts#L9)*

___

###  ui

• **ui**: *EntityUIQuery‹any, EntityType›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[ui](_app_gear_gear_query_.gearquery.md#ui)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:23

## Methods

###  createUIQuery

▸ **createUIQuery**(): *void*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[createUIQuery](_app_gear_gear_query_.gearquery.md#createuiquery)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:246

Create sub UI query for querying Entity's UI state

**`example`** 

export class ProductsQuery extends QueryEntity<ProductsState> {
  ui: EntityUIQuery<ProductsUIState>;

  constructor(protected store: ProductsStore) {
    super(store);
    this.createUIQuery();
  }

}

**Returns:** *void*

___

###  getActive

▸ **getActive**(): *GearState["active"] extends any[] ? EntityType[] : EntityType*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[getActive](_app_gear_gear_query_.gearquery.md#getactive)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:150

Get the active entity

**`example`** 

this.query.getActive()

**Returns:** *GearState["active"] extends any[] ? EntityType[] : EntityType*

___

###  getActiveId

▸ **getActiveId**(): *GearState["active"]*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[getActiveId](_app_gear_gear_query_.gearquery.md#getactiveid)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:132

Get the active id

**`example`** 

this.query.getActiveId()

**Returns:** *GearState["active"]*

___

###  getAll

▸ **getAll**(`options`: SelectAllOptionsA‹EntityType›): *HashMap‹EntityType›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[getAll](_app_gear_gear_query_.gearquery.md#getall)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:78

Get the entire store's entity collection

**`example`** 

this.query.getAll()

this.query.getAll({
  limitTo: 5
  filterBy: entity => entity.completed === true
})

this.query.getAll({
  asObject: true,
  limitTo: 3
})

 this.query.getAll({
  sortBy: 'price',
  sortByOrder: Order.DESC
})

**Parameters:**

Name | Type |
------ | ------ |
`options` | SelectAllOptionsA‹EntityType› |

**Returns:** *HashMap‹EntityType›*

▸ **getAll**(`options`: SelectAllOptionsB‹EntityType›): *EntityType[]*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[getAll](_app_gear_gear_query_.gearquery.md#getall)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:79

**Parameters:**

Name | Type |
------ | ------ |
`options` | SelectAllOptionsB‹EntityType› |

**Returns:** *EntityType[]*

▸ **getAll**(`options`: SelectAllOptionsC‹EntityType›): *HashMap‹EntityType›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[getAll](_app_gear_gear_query_.gearquery.md#getall)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:80

**Parameters:**

Name | Type |
------ | ------ |
`options` | SelectAllOptionsC‹EntityType› |

**Returns:** *HashMap‹EntityType›*

▸ **getAll**(`options`: SelectAllOptionsD‹EntityType›): *EntityType[]*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[getAll](_app_gear_gear_query_.gearquery.md#getall)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:81

**Parameters:**

Name | Type |
------ | ------ |
`options` | SelectAllOptionsD‹EntityType› |

**Returns:** *EntityType[]*

▸ **getAll**(`options`: SelectAllOptionsE‹EntityType›): *EntityType[]*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[getAll](_app_gear_gear_query_.gearquery.md#getall)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:82

**Parameters:**

Name | Type |
------ | ------ |
`options` | SelectAllOptionsE‹EntityType› |

**Returns:** *EntityType[]*

▸ **getAll**(): *EntityType[]*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[getAll](_app_gear_gear_query_.gearquery.md#getall)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:83

**Returns:** *EntityType[]*

___

###  getCount

▸ **getCount**(`predicate?`: function): *number*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[getCount](_app_gear_gear_query_.gearquery.md#getcount)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:168

Get the store's entity collection length

**`example`** 

this.query.getCount()
this.query.getCount(entity => entity.completed)

**Parameters:**

▪`Optional`  **predicate**: *function*

▸ (`entity`: EntityType, `index`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | EntityType |
`index` | number |

**Returns:** *number*

___

###  getEntity

▸ **getEntity**(`id`: IDType): *EntityType*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[getEntity](_app_gear_gear_query_.gearquery.md#getentity)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:116

Get an entity by id

**`example`** 

this.query.getEntity(1);

**Parameters:**

Name | Type |
------ | ------ |
`id` | IDType |

**Returns:** *EntityType*

___

###  getHasCache

▸ **getHasCache**(): *boolean*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[getHasCache](_app_gear_gear_query_.gearquery.md#gethascache)*

Defined in node_modules/@datorama/akita/src/query.d.ts:71

Whether we've cached data

**`example`** 

this.query.getHasCache()

**Returns:** *boolean*

___

###  getValue

▸ **getValue**(): *[GearState](../interfaces/_app_gear_gear_store_.gearstate.md)*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[getValue](_app_gear_gear_query_.gearquery.md#getvalue)*

Defined in node_modules/@datorama/akita/src/query.d.ts:50

Get the store's value

**`example`** 

this.query.getValue()

**Returns:** *[GearState](../interfaces/_app_gear_gear_store_.gearstate.md)*

___

###  hasActive

▸ **hasActive**(`id?`: IDType): *boolean*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[hasActive](_app_gear_gear_query_.gearquery.md#hasactive)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:228

Returns whether entity store has an active entity

**`example`** 

this.query.hasActive()
this.query.hasActive(3)

**Parameters:**

Name | Type |
------ | ------ |
`id?` | IDType |

**Returns:** *boolean*

___

###  hasEntity

▸ **hasEntity**(`id`: IDType): *boolean*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[hasEntity](_app_gear_gear_query_.gearquery.md#hasentity)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:215

Returns whether entity exists

**`example`** 

this.query.hasEntity(2)
this.query.hasEntity(entity => entity.completed)
this.query.hasEntity([1, 2, 33])

**Parameters:**

Name | Type |
------ | ------ |
`id` | IDType |

**Returns:** *boolean*

▸ **hasEntity**(`id`: IDType[]): *boolean*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[hasEntity](_app_gear_gear_query_.gearquery.md#hasentity)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:216

**Parameters:**

Name | Type |
------ | ------ |
`id` | IDType[] |

**Returns:** *boolean*

▸ **hasEntity**(`project`: function): *boolean*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[hasEntity](_app_gear_gear_query_.gearquery.md#hasentity)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:217

**Parameters:**

▪ **project**: *function*

▸ (`entity`: EntityType): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | EntityType |

**Returns:** *boolean*

▸ **hasEntity**(): *boolean*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[hasEntity](_app_gear_gear_query_.gearquery.md#hasentity)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:218

**Returns:** *boolean*

___

###  select

▸ **select**<**K**>(`key`: K): *Observable‹GearState[K]›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[select](_app_gear_gear_query_.gearquery.md#select)*

Defined in node_modules/@datorama/akita/src/query.d.ts:21

Select a slice from the store

**`example`** 

this.query.select()
this.query.select(state => state.entities)
this.query.select('token');
this.query.select(['name', 'email'])
this.query.select([state => state.name, state => state.age])

**Type parameters:**

▪ **K**: *keyof GearState*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *Observable‹GearState[K]›*

▸ **select**<**R**>(`project`: function): *Observable‹R›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[select](_app_gear_gear_query_.gearquery.md#select)*

Defined in node_modules/@datorama/akita/src/query.d.ts:22

**Type parameters:**

▪ **R**

**Parameters:**

▪ **project**: *function*

▸ (`store`: [GearState](../interfaces/_app_gear_gear_store_.gearstate.md)): *R*

**Parameters:**

Name | Type |
------ | ------ |
`store` | [GearState](../interfaces/_app_gear_gear_store_.gearstate.md) |

**Returns:** *Observable‹R›*

▸ **select**<**K**>(`stateKeys`: K[]): *Observable‹Pick‹[GearState](../interfaces/_app_gear_gear_store_.gearstate.md), K››*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[select](_app_gear_gear_query_.gearquery.md#select)*

Defined in node_modules/@datorama/akita/src/query.d.ts:23

**Type parameters:**

▪ **K**: *keyof GearState*

**Parameters:**

Name | Type |
------ | ------ |
`stateKeys` | K[] |

**Returns:** *Observable‹Pick‹[GearState](../interfaces/_app_gear_gear_store_.gearstate.md), K››*

▸ **select**<**R**>(`selectorFns`: R): *Observable‹ReturnTypes‹R››*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[select](_app_gear_gear_query_.gearquery.md#select)*

Defined in node_modules/@datorama/akita/src/query.d.ts:24

**Type parameters:**

▪ **R**: *[function] | Array‹function›*

**Parameters:**

Name | Type |
------ | ------ |
`selectorFns` | R |

**Returns:** *Observable‹ReturnTypes‹R››*

▸ **select**(): *Observable‹[GearState](../interfaces/_app_gear_gear_store_.gearstate.md)›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[select](_app_gear_gear_query_.gearquery.md#select)*

Defined in node_modules/@datorama/akita/src/query.d.ts:25

**Returns:** *Observable‹[GearState](../interfaces/_app_gear_gear_store_.gearstate.md)›*

___

###  selectActive

▸ **selectActive**<**R**>(): *GearState["active"] extends any[] ? Observable<EntityType[]> : Observable<EntityType>*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectActive](_app_gear_gear_query_.gearquery.md#selectactive)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:141

Select the active entity

**`example`** 

this.query.selectActive()
this.query.selectActive(entity => entity.title)

**Type parameters:**

▪ **R**

**Returns:** *GearState["active"] extends any[] ? Observable<EntityType[]> : Observable<EntityType>*

▸ **selectActive**<**R**>(`project?`: function): *GearState["active"] extends any[] ? Observable<R[]> : Observable<R>*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectActive](_app_gear_gear_query_.gearquery.md#selectactive)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:142

**Type parameters:**

▪ **R**

**Parameters:**

▪`Optional`  **project**: *function*

▸ (`entity`: EntityType): *R*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | EntityType |

**Returns:** *GearState["active"] extends any[] ? Observable<R[]> : Observable<R>*

___

###  selectActiveId

▸ **selectActiveId**(): *Observable‹GearState["active"]›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectActiveId](_app_gear_gear_query_.gearquery.md#selectactiveid)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:124

Select the active entity's id

**`example`** 

this.query.selectActiveId()

**Returns:** *Observable‹GearState["active"]›*

___

###  selectAll

▸ **selectAll**(`options`: SelectAllOptionsA‹EntityType›): *Observable‹HashMap‹EntityType››*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectAll](_app_gear_gear_query_.gearquery.md#selectall)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:50

Select the entire store's entity collection

**`example`** 

this.query.selectAll()

this.query.selectAll({
  limitTo: 5
  filterBy: entity => entity.completed === true
})

this.query.selectAll({
  asObject: true,
  limitTo: 3
})

 this.query.selectAll({
  sortBy: 'price',
  sortByOrder: Order.DESC
})

**Parameters:**

Name | Type |
------ | ------ |
`options` | SelectAllOptionsA‹EntityType› |

**Returns:** *Observable‹HashMap‹EntityType››*

▸ **selectAll**(`options`: SelectAllOptionsB‹EntityType›): *Observable‹EntityType[]›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectAll](_app_gear_gear_query_.gearquery.md#selectall)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`options` | SelectAllOptionsB‹EntityType› |

**Returns:** *Observable‹EntityType[]›*

▸ **selectAll**(`options`: SelectAllOptionsC‹EntityType›): *Observable‹HashMap‹EntityType››*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectAll](_app_gear_gear_query_.gearquery.md#selectall)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:52

**Parameters:**

Name | Type |
------ | ------ |
`options` | SelectAllOptionsC‹EntityType› |

**Returns:** *Observable‹HashMap‹EntityType››*

▸ **selectAll**(`options`: SelectAllOptionsD‹EntityType›): *Observable‹EntityType[]›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectAll](_app_gear_gear_query_.gearquery.md#selectall)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:53

**Parameters:**

Name | Type |
------ | ------ |
`options` | SelectAllOptionsD‹EntityType› |

**Returns:** *Observable‹EntityType[]›*

▸ **selectAll**(`options`: SelectAllOptionsE‹EntityType›): *Observable‹EntityType[]›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectAll](_app_gear_gear_query_.gearquery.md#selectall)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:54

**Parameters:**

Name | Type |
------ | ------ |
`options` | SelectAllOptionsE‹EntityType› |

**Returns:** *Observable‹EntityType[]›*

▸ **selectAll**(): *Observable‹EntityType[]›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectAll](_app_gear_gear_query_.gearquery.md#selectall)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:55

**Returns:** *Observable‹EntityType[]›*

___

###  selectCount

▸ **selectCount**(`predicate?`: function): *Observable‹number›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectCount](_app_gear_gear_query_.gearquery.md#selectcount)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:159

Select the store's entity collection length

**`example`** 

this.query.selectCount()
this.query.selectCount(entity => entity.completed)

**Parameters:**

▪`Optional`  **predicate**: *function*

▸ (`entity`: EntityType, `index`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | EntityType |
`index` | number |

**Returns:** *Observable‹number›*

___

###  selectEntity

▸ **selectEntity**<**R**>(`id`: IDType): *Observable‹EntityType›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectEntity](_app_gear_gear_query_.gearquery.md#selectentity)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:105

Select an entity or a slice of an entity

**`example`** 

this.query.selectEntity(1)
this.query.selectEntity(1, entity => entity.config.date)
this.query.selectEntity(1, 'comments')
this.query.selectEntity(e => e.title === 'title')

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`id` | IDType |

**Returns:** *Observable‹EntityType›*

▸ **selectEntity**<**K**>(`id`: IDType, `project?`: K): *Observable‹EntityType[K]›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectEntity](_app_gear_gear_query_.gearquery.md#selectentity)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:106

**Type parameters:**

▪ **K**: *keyof EntityType*

**Parameters:**

Name | Type |
------ | ------ |
`id` | IDType |
`project?` | K |

**Returns:** *Observable‹EntityType[K]›*

▸ **selectEntity**<**R**>(`id`: IDType, `project`: function): *Observable‹R›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectEntity](_app_gear_gear_query_.gearquery.md#selectentity)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:107

**Type parameters:**

▪ **R**

**Parameters:**

▪ **id**: *IDType*

▪ **project**: *function*

▸ (`entity`: EntityType): *R*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | EntityType |

**Returns:** *Observable‹R›*

▸ **selectEntity**<**R**>(`predicate`: ItemPredicate‹EntityType›): *Observable‹EntityType›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectEntity](_app_gear_gear_query_.gearquery.md#selectentity)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:108

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | ItemPredicate‹EntityType› |

**Returns:** *Observable‹EntityType›*

___

###  selectEntityAction

▸ **selectEntityAction**(`action`: EntityActions): *Observable‹ID[]›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectEntityAction](_app_gear_gear_query_.gearquery.md#selectentityaction)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:203

Listen for entity actions

**`example`** 

 this.query.selectEntityAction(EntityActions.Add);
 this.query.selectEntityAction(EntityActions.Update);
 this.query.selectEntityAction(EntityActions.Remove);

 this.query.selectEntityAction();

**Parameters:**

Name | Type |
------ | ------ |
`action` | EntityActions |

**Returns:** *Observable‹ID[]›*

▸ **selectEntityAction**(): *Observable‹EntityAction‹EntityType››*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectEntityAction](_app_gear_gear_query_.gearquery.md#selectentityaction)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:204

**Returns:** *Observable‹EntityAction‹EntityType››*

___

###  selectError

▸ **selectError**<**ErrorType**>(): *Observable‹ErrorType›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectError](_app_gear_gear_query_.gearquery.md#selecterror)*

Defined in node_modules/@datorama/akita/src/query.d.ts:41

Select the error state

**`example`** 

this.query.selectError().subscribe(error => {})

**Type parameters:**

▪ **ErrorType**

**Returns:** *Observable‹ErrorType›*

___

###  selectFirst

▸ **selectFirst**<**R**>(): *Observable‹EntityType›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectFirst](_app_gear_gear_query_.gearquery.md#selectfirst)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:189

Select the first entity from the store

**`example`** 

this.query.selectFirst()
this.query.selectFirst(todo => todo.title)

**Type parameters:**

▪ **R**

**Returns:** *Observable‹EntityType›*

▸ **selectFirst**<**R**>(`project`: function): *Observable‹R›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectFirst](_app_gear_gear_query_.gearquery.md#selectfirst)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:190

**Type parameters:**

▪ **R**

**Parameters:**

▪ **project**: *function*

▸ (`entity`: EntityType): *R*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | EntityType |

**Returns:** *Observable‹R›*

___

###  selectHasCache

▸ **selectHasCache**(): *Observable‹boolean›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectHasCache](_app_gear_gear_query_.gearquery.md#selecthascache)*

Defined in node_modules/@datorama/akita/src/query.d.ts:62

Select the cache state

**`example`** 

this.query.selectHasCache().pipe(
  switchMap(hasCache => {
    return hasCache ? of() : http().pipe(res => store.set(res))
  })
)

**Returns:** *Observable‹boolean›*

___

###  selectLast

▸ **selectLast**<**R**>(): *Observable‹EntityType›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectLast](_app_gear_gear_query_.gearquery.md#selectlast)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:178

Select the last entity from the store

**`example`** 

this.query.selectLast()
this.query.selectLast(todo => todo.title)

**Type parameters:**

▪ **R**

**Returns:** *Observable‹EntityType›*

▸ **selectLast**<**R**>(`project`: function): *Observable‹R›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectLast](_app_gear_gear_query_.gearquery.md#selectlast)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:179

**Type parameters:**

▪ **R**

**Parameters:**

▪ **project**: *function*

▸ (`entity`: EntityType): *R*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | EntityType |

**Returns:** *Observable‹R›*

___

###  selectLoading

▸ **selectLoading**(): *Observable‹boolean›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectLoading](_app_gear_gear_query_.gearquery.md#selectloading)*

Defined in node_modules/@datorama/akita/src/query.d.ts:33

Select the loading state

**`example`** 

this.query.selectLoading().subscribe(isLoading => {})

**Returns:** *Observable‹boolean›*

___

###  selectMany

▸ **selectMany**<**R**>(`ids`: IDType[]): *Observable‹EntityType[]›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectMany](_app_gear_gear_query_.gearquery.md#selectmany)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:92

Select multiple entities from the store

**`example`** 

this.query.selectMany([1,2,3])
this.query.selectMany([1,2], entity => entity.title)

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`ids` | IDType[] |

**Returns:** *Observable‹EntityType[]›*

▸ **selectMany**<**R**>(`ids`: IDType[], `project`: function): *Observable‹R[]›*

*Inherited from [GearQuery](_app_gear_gear_query_.gearquery.md).[selectMany](_app_gear_gear_query_.gearquery.md#selectmany)*

Defined in node_modules/@datorama/akita/src/queryEntity.d.ts:93

**Type parameters:**

▪ **R**

**Parameters:**

▪ **ids**: *IDType[]*

▪ **project**: *function*

▸ (`entity`: EntityType): *R*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | EntityType |

**Returns:** *Observable‹R[]›*
