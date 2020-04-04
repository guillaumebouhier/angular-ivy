[my-app](../README.md) › [Globals](../globals.md) › ["app/cart/cart.store"](../modules/_app_cart_cart_store_.md) › [CartStore](_app_cart_cart_store_.cartstore.md)

# Class: CartStore <**EntityType, IDType**>

## Type parameters

▪ **EntityType**

▪ **IDType**

## Hierarchy

* EntityStore‹[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)›

  ↳ **CartStore**

## Index

### Constructors

* [constructor](_app_cart_cart_store_.cartstore.md#constructor)

### Properties

* [cache](_app_cart_cart_store_.cartstore.md#protected-cache)
* [cacheConfig](_app_cart_cart_store_.cartstore.md#cacheconfig)
* [config](_app_cart_cart_store_.cartstore.md#config)
* [deepFreeze](_app_cart_cart_store_.cartstore.md#deepfreeze)
* [idKey](_app_cart_cart_store_.cartstore.md#idkey)
* [options](_app_cart_cart_store_.cartstore.md#protected-options)
* [resettable](_app_cart_cart_store_.cartstore.md#resettable)
* [selectEntityAction$](_app_cart_cart_store_.cartstore.md#selectentityaction)
* [storeName](_app_cart_cart_store_.cartstore.md#storename)
* [ui](_app_cart_cart_store_.cartstore.md#ui)

### Methods

* [_cache](_app_cart_cart_store_.cartstore.md#_cache)
* [_select](_app_cart_cart_store_.cartstore.md#_select)
* [_setState](_app_cart_cart_store_.cartstore.md#_setstate)
* [_value](_app_cart_cart_store_.cartstore.md#_value)
* [add](_app_cart_cart_store_.cartstore.md#add)
* [addActive](_app_cart_cart_store_.cartstore.md#addactive)
* [akitaPreAddEntity](_app_cart_cart_store_.cartstore.md#akitapreaddentity)
* [akitaPreCheckEntity](_app_cart_cart_store_.cartstore.md#akitaprecheckentity)
* [akitaPreUpdate](_app_cart_cart_store_.cartstore.md#akitapreupdate)
* [akitaPreUpdateEntity](_app_cart_cart_store_.cartstore.md#akitapreupdateentity)
* [createUIStore](_app_cart_cart_store_.cartstore.md#createuistore)
* [destroy](_app_cart_cart_store_.cartstore.md#destroy)
* [move](_app_cart_cart_store_.cartstore.md#move)
* [ngOnDestroy](_app_cart_cart_store_.cartstore.md#ngondestroy)
* [remove](_app_cart_cart_store_.cartstore.md#remove)
* [removeActive](_app_cart_cart_store_.cartstore.md#removeactive)
* [replace](_app_cart_cart_store_.cartstore.md#replace)
* [reset](_app_cart_cart_store_.cartstore.md#reset)
* [set](_app_cart_cart_store_.cartstore.md#set)
* [setActive](_app_cart_cart_store_.cartstore.md#setactive)
* [setError](_app_cart_cart_store_.cartstore.md#seterror)
* [setHasCache](_app_cart_cart_store_.cartstore.md#sethascache)
* [setLoading](_app_cart_cart_store_.cartstore.md#setloading)
* [toggleActive](_app_cart_cart_store_.cartstore.md#toggleactive)
* [update](_app_cart_cart_store_.cartstore.md#update)
* [updateActive](_app_cart_cart_store_.cartstore.md#updateactive)
* [updateStoreConfig](_app_cart_cart_store_.cartstore.md#updatestoreconfig)
* [upsert](_app_cart_cart_store_.cartstore.md#upsert)
* [upsertMany](_app_cart_cart_store_.cartstore.md#upsertmany)

## Constructors

###  constructor

\+ **new CartStore**(): *[CartStore](_app_cart_cart_store_.cartstore.md)*

*Overrides void*

*Defined in [src/app/cart/cart.store.ts:9](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/cart/cart.store.ts#L9)*

**Returns:** *[CartStore](_app_cart_cart_store_.cartstore.md)*

## Properties

### `Protected` cache

• **cache**: *StoreCache*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[cache](_app_gear_gear_store_.gearstore.md#protected-cache)*

Defined in node_modules/@datorama/akita/src/store.d.ts:36

___

###  cacheConfig

• **cacheConfig**: *object*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[cacheConfig](_app_gear_gear_store_.gearstore.md#cacheconfig)*

Defined in node_modules/@datorama/akita/src/store.d.ts:76

#### Type declaration:

* **ttl**: *number*

___

###  config

• **config**: *StoreConfigOptions*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[config](_app_gear_gear_store_.gearstore.md#config)*

Defined in node_modules/@datorama/akita/src/store.d.ts:73

___

###  deepFreeze

• **deepFreeze**: *typeof deepFreeze*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[deepFreeze](_app_gear_gear_store_.gearstore.md#deepfreeze)*

Defined in node_modules/@datorama/akita/src/store.d.ts:75

___

###  idKey

• **idKey**: *string*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[idKey](_app_gear_gear_store_.gearstore.md#idkey)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:32

___

### `Protected` options

• **options**: *Partial‹StoreConfigOptions›*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[options](_app_gear_gear_store_.gearstore.md#protected-options)*

*Overrides void*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:27

___

###  resettable

• **resettable**: *boolean*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[resettable](_app_gear_gear_store_.gearstore.md#resettable)*

Defined in node_modules/@datorama/akita/src/store.d.ts:79

___

###  selectEntityAction$

• **selectEntityAction$**: *Observable‹EntityAction‹IDType››*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[selectEntityAction$](_app_gear_gear_store_.gearstore.md#selectentityaction)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:31

___

###  storeName

• **storeName**: *string*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[storeName](_app_gear_gear_store_.gearstore.md#storename)*

Defined in node_modules/@datorama/akita/src/store.d.ts:74

___

###  ui

• **ui**: *EntityUIStore‹any, EntityType›*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[ui](_app_gear_gear_store_.gearstore.md#ui)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:28

## Methods

###  _cache

▸ **_cache**(): *BehaviorSubject‹boolean›*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[_cache](_app_gear_gear_store_.gearstore.md#_cache)*

Defined in node_modules/@datorama/akita/src/store.d.ts:72

**Returns:** *BehaviorSubject‹boolean›*

___

###  _select

▸ **_select**<**R**>(`project`: function): *Observable‹R›*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[_select](_app_gear_gear_store_.gearstore.md#_select)*

Defined in node_modules/@datorama/akita/src/store.d.ts:70

**Type parameters:**

▪ **R**

**Parameters:**

▪ **project**: *function*

▸ (`store`: [CartState](../interfaces/_app_cart_cart_store_.cartstate.md)): *R*

**Parameters:**

Name | Type |
------ | ------ |
`store` | [CartState](../interfaces/_app_cart_cart_store_.cartstate.md) |

**Returns:** *Observable‹R›*

___

###  _setState

▸ **_setState**(`newStateFn`: function, `_dispatchAction?`: boolean): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[_setState](_app_gear_gear_store_.gearstore.md#_setstate)*

Defined in node_modules/@datorama/akita/src/store.d.ts:80

**Parameters:**

▪ **newStateFn**: *function*

▸ (`state`: Readonly‹[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)›): *[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | Readonly‹[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)› |

▪`Optional`  **_dispatchAction**: *boolean*

**Returns:** *void*

___

###  _value

▸ **_value**(): *[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[_value](_app_gear_gear_store_.gearstore.md#_value)*

Defined in node_modules/@datorama/akita/src/store.d.ts:71

**Returns:** *[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)*

___

###  add

▸ **add**(`entities`: OrArray‹EntityType›, `options?`: AddEntitiesOptions): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[add](_app_gear_gear_store_.gearstore.md#add)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:56

Add entities

**`example`** 

this.store.add([Entity, Entity])
this.store.add(Entity)
this.store.add(Entity, { prepend: true })

this.store.add(Entity, { loading: false })

**Parameters:**

Name | Type |
------ | ------ |
`entities` | OrArray‹EntityType› |
`options?` | AddEntitiesOptions |

**Returns:** *void*

___

###  addActive

▸ **addActive**<**T**>(`ids`: T): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[addActive](_app_gear_gear_store_.gearstore.md#addactive)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:183

Add active entities

**`example`** 

store.addActive(2);
store.addActive([3, 4, 5]);

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`ids` | T |

**Returns:** *void*

___

###  akitaPreAddEntity

▸ **akitaPreAddEntity**(`newEntity`: Readonly‹EntityType›): *EntityType*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[akitaPreAddEntity](_app_gear_gear_store_.gearstore.md#akitapreaddentity)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:228

**Parameters:**

Name | Type |
------ | ------ |
`newEntity` | Readonly‹EntityType› |

**Returns:** *EntityType*

___

###  akitaPreCheckEntity

▸ **akitaPreCheckEntity**(`newEntity`: Readonly‹EntityType›): *EntityType*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[akitaPreCheckEntity](_app_gear_gear_store_.gearstore.md#akitaprecheckentity)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:229

**Parameters:**

Name | Type |
------ | ------ |
`newEntity` | Readonly‹EntityType› |

**Returns:** *EntityType*

___

###  akitaPreUpdate

▸ **akitaPreUpdate**(`_`: Readonly‹[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)›, `nextState`: Readonly‹[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)›): *[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[akitaPreUpdate](_app_gear_gear_store_.gearstore.md#akitapreupdate)*

Defined in node_modules/@datorama/akita/src/store.d.ts:110

**Parameters:**

Name | Type |
------ | ------ |
`_` | Readonly‹[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)› |
`nextState` | Readonly‹[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)› |

**Returns:** *[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)*

___

###  akitaPreUpdateEntity

▸ **akitaPreUpdateEntity**(`_`: Readonly‹EntityType›, `nextEntity`: Readonly‹EntityType›): *EntityType*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[akitaPreUpdateEntity](_app_gear_gear_store_.gearstore.md#akitapreupdateentity)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:227

**Parameters:**

Name | Type |
------ | ------ |
`_` | Readonly‹EntityType› |
`nextEntity` | Readonly‹EntityType› |

**Returns:** *EntityType*

___

###  createUIStore

▸ **createUIStore**(`initialState?`: object, `storeConfig?`: Partial‹StoreConfigOptions›): *EntityUIStore‹any, EntityType›*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[createUIStore](_app_gear_gear_store_.gearstore.md#createuistore)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:225

Create sub UI store for managing Entity's UI state

**`example`** 

export type ProductUI = {
  isLoading: boolean;
  isOpen: boolean
}

interface ProductsUIState extends EntityState<ProductUI> {}

export class ProductsStore EntityStore<ProductsState, Product> {
  ui: EntityUIStore<ProductsUIState, ProductUI>;

  constructor() {
    super();
    this.createUIStore();
  }

}

**Parameters:**

Name | Type |
------ | ------ |
`initialState?` | object |
`storeConfig?` | Partial‹StoreConfigOptions› |

**Returns:** *EntityUIStore‹any, EntityType›*

___

###  destroy

▸ **destroy**(): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[destroy](_app_gear_gear_store_.gearstore.md#destroy)*

*Overrides void*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:226

**Returns:** *void*

___

###  move

▸ **move**(`from`: number, `to`: number): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[move](_app_gear_gear_store_.gearstore.md#move)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:133

Move entity inside the collection

**`example`** 

this.store.move(fromIndex, toIndex)

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |

**Returns:** *void*

___

###  ngOnDestroy

▸ **ngOnDestroy**(): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[ngOnDestroy](_app_gear_gear_store_.gearstore.md#ngondestroy)*

Defined in node_modules/@datorama/akita/src/store.d.ts:111

**Returns:** *void*

___

###  remove

▸ **remove**(`id?`: OrArray‹IDType›): *any*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[remove](_app_gear_gear_store_.gearstore.md#remove)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:144

Remove one or more entities

**`example`** 

this.store.remove(5)
this.store.remove([1,2,3])
this.store.remove()

**Parameters:**

Name | Type |
------ | ------ |
`id?` | OrArray‹IDType› |

**Returns:** *any*

▸ **remove**(`predicate`: function): *any*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[remove](_app_gear_gear_store_.gearstore.md#remove)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:148

this.store.remove(entity => entity.id === 1)

**Parameters:**

▪ **predicate**: *function*

▸ (`entity`: Readonly‹EntityType›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | Readonly‹EntityType› |

**Returns:** *any*

___

###  removeActive

▸ **removeActive**<**T**>(`ids`: T): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[removeActive](_app_gear_gear_store_.gearstore.md#removeactive)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:192

Remove active entities

**`example`** 

store.removeActive(2)
store.removeActive([3, 4, 5])

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`ids` | T |

**Returns:** *void*

___

###  replace

▸ **replace**(`ids`: IDS, `newState`: Partial‹EntityType›): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[replace](_app_gear_gear_store_.gearstore.md#replace)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:123

Replace one or more entities (except the id property)

**`example`** 

this.store.replace(5, newEntity)
this.store.replace([1,2,3], newEntity)

**Parameters:**

Name | Type |
------ | ------ |
`ids` | IDS |
`newState` | Partial‹EntityType› |

**Returns:** *void*

___

###  reset

▸ **reset**(): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[reset](_app_gear_gear_store_.gearstore.md#reset)*

Defined in node_modules/@datorama/akita/src/store.d.ts:90

Reset the current store back to the initial value

**`example`** 

store.reset()

**Returns:** *void*

___

###  set

▸ **set**(`entities`: SetEntities‹EntityType›): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[set](_app_gear_gear_store_.gearstore.md#set)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:44

Replace current collection with provided collection

**`example`** 

this.store.set([Entity, Entity])
this.store.set({ids: [], entities: {}})
this.store.set({ 1: {}, 2: {}})

**Parameters:**

Name | Type |
------ | ------ |
`entities` | SetEntities‹EntityType› |

**Returns:** *void*

___

###  setActive

▸ **setActive**(`idOrOptions`: CartState["active"] extends any[] ? CartState["active"] : S["active"] | object): *any*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[setActive](_app_gear_gear_store_.gearstore.md#setactive)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:174

Set the given entity as active

**`example`** 

store.setActive(1)
store.setActive([1, 2, 3])

**Parameters:**

Name | Type |
------ | ------ |
`idOrOptions` | CartState["active"] extends any[] ? CartState["active"] : S["active"] &#124; object |

**Returns:** *any*

___

###  setError

▸ **setError**<**T**>(`error`: T): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[setError](_app_gear_gear_store_.gearstore.md#seterror)*

Defined in node_modules/@datorama/akita/src/store.d.ts:69

 Set the error state

**`example`** 

 store.setError({text: 'unable to load data' })

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`error` | T |

**Returns:** *void*

___

###  setHasCache

▸ **setHasCache**(`hasCache`: boolean, `options?`: object): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[setHasCache](_app_gear_gear_store_.gearstore.md#sethascache)*

Defined in node_modules/@datorama/akita/src/store.d.ts:58

Set whether the data is cached

**`example`** 

store.setHasCache(true)
store.setHasCache(false)
store.setHasCache(true, { restartTTL: true })

**Parameters:**

▪ **hasCache**: *boolean*

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`restartTTL` | boolean |

**Returns:** *void*

___

###  setLoading

▸ **setLoading**(`loading?`: boolean): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[setLoading](_app_gear_gear_store_.gearstore.md#setloading)*

Defined in node_modules/@datorama/akita/src/store.d.ts:46

 Set the loading state

**`example`** 

 store.setLoading(true)

**Parameters:**

Name | Type |
------ | ------ |
`loading?` | boolean |

**Returns:** *void*

___

###  toggleActive

▸ **toggleActive**<**T**>(`ids`: T): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[toggleActive](_app_gear_gear_store_.gearstore.md#toggleactive)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:201

Toggle active entities

**`example`** 

store.toggle(2)
store.toggle([3, 4, 5])

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`ids` | T |

**Returns:** *void*

___

###  update

▸ **update**(`id`: OrArray‹IDType› | null, `newStateFn`: UpdateStateCallback‹EntityType›): *any*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[update](_app_gear_gear_store_.gearstore.md#update)*

*Overrides void*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:67

Update entities

**`example`** 

store.update(1, entity => ...)
store.update([1, 2, 3], entity => ...)
store.update(null, entity => ...)

**Parameters:**

Name | Type |
------ | ------ |
`id` | OrArray‹IDType› &#124; null |
`newStateFn` | UpdateStateCallback‹EntityType› |

**Returns:** *any*

▸ **update**(`id`: OrArray‹IDType› | null, `newState`: Partial‹EntityType›): *any*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[update](_app_gear_gear_store_.gearstore.md#update)*

*Overrides void*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:71

store.update(1, { name: newName })

**Parameters:**

Name | Type |
------ | ------ |
`id` | OrArray‹IDType› &#124; null |
`newState` | Partial‹EntityType› |

**Returns:** *any*

▸ **update**(`predicate`: UpdateEntityPredicate‹EntityType›, `newStateFn`: UpdateStateCallback‹EntityType›): *any*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[update](_app_gear_gear_store_.gearstore.md#update)*

*Overrides void*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:75

store.update(entity => entity.price > 3, entity => ({ name: newName }))

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | UpdateEntityPredicate‹EntityType› |
`newStateFn` | UpdateStateCallback‹EntityType› |

**Returns:** *any*

▸ **update**(`predicate`: UpdateEntityPredicate‹EntityType›, `newState`: Partial‹EntityType›): *any*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[update](_app_gear_gear_store_.gearstore.md#update)*

*Overrides void*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:79

store.update(entity => entity.price > 3, { name: newName })

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | UpdateEntityPredicate‹EntityType› |
`newState` | Partial‹EntityType› |

**Returns:** *any*

▸ **update**(`newState`: UpdateStateCallback‹[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)›): *any*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[update](_app_gear_gear_store_.gearstore.md#update)*

*Overrides void*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:81

Support non-entity updates

**Parameters:**

Name | Type |
------ | ------ |
`newState` | UpdateStateCallback‹[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)› |

**Returns:** *any*

▸ **update**(`newState`: Partial‹[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)›): *any*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[update](_app_gear_gear_store_.gearstore.md#update)*

*Overrides void*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:82

**Parameters:**

Name | Type |
------ | ------ |
`newState` | Partial‹[CartState](../interfaces/_app_cart_cart_store_.cartstate.md)› |

**Returns:** *any*

___

###  updateActive

▸ **updateActive**(`newStateOrCallback`: UpdateStateCallback‹EntityType› | Partial‹EntityType›): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[updateActive](_app_gear_gear_store_.gearstore.md#updateactive)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:165

Update the active entity

**`example`** 

this.store.updateActive({ completed: true })
this.store.updateActive(active => {
  return {
    config: {
     ..active.config,
     date
    }
  }
})

**Parameters:**

Name | Type |
------ | ------ |
`newStateOrCallback` | UpdateStateCallback‹EntityType› &#124; Partial‹EntityType› |

**Returns:** *void*

___

###  updateStoreConfig

▸ **updateStoreConfig**(`newOptions`: UpdatableStoreConfigOptions): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[updateStoreConfig](_app_gear_gear_store_.gearstore.md#updatestoreconfig)*

Defined in node_modules/@datorama/akita/src/store.d.ts:109

**Parameters:**

Name | Type |
------ | ------ |
`newOptions` | UpdatableStoreConfigOptions |

**Returns:** *void*

___

###  upsert

▸ **upsert**(`ids`: OrArray‹IDType›, `newState`: Partial‹EntityType› | EntityType | UpdateStateCallback‹EntityType› | EntityType[], `options?`: object): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[upsert](_app_gear_gear_store_.gearstore.md#upsert)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:94

Create or update

**`example`** 

store.upsert(1, { active: true })
store.upsert([2, 3], { active: true })
store.upsert([2, 3], entity => ({ isOpen: !entity.isOpen}))

**Parameters:**

▪ **ids**: *OrArray‹IDType›*

▪ **newState**: *Partial‹EntityType› | EntityType | UpdateStateCallback‹EntityType› | EntityType[]*

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`baseClass?` | Constructor |

**Returns:** *void*

___

###  upsertMany

▸ **upsertMany**(`entities`: EntityType[], `options?`: object): *void*

*Inherited from [GearStore](_app_gear_gear_store_.gearstore.md).[upsertMany](_app_gear_gear_store_.gearstore.md#upsertmany)*

Defined in node_modules/@datorama/akita/src/entityStore.d.ts:109

Upsert entity collection (idKey must be present)

**`example`** 

store.upsertMany([ { id: 1 }, { id: 2 }]);

store.upsertMany([ { id: 1 }, { id: 2 }], { loading: true  });
store.upsertMany([ { id: 1 }, { id: 2 }], { baseClass: Todo  });

**Parameters:**

▪ **entities**: *EntityType[]*

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`baseClass?` | Constructor |
`loading?` | boolean |

**Returns:** *void*
