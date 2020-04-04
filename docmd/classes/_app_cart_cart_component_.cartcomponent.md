[my-app](../README.md) › [Globals](../globals.md) › ["app/cart/cart.component"](../modules/_app_cart_cart_component_.md) › [CartComponent](_app_cart_cart_component_.cartcomponent.md)

# Class: CartComponent

## Hierarchy

* **CartComponent**

## Implements

* OnInit

## Index

### Constructors

* [constructor](_app_cart_cart_component_.cartcomponent.md#constructor)

### Properties

* [cartQuery](_app_cart_cart_component_.cartcomponent.md#private-cartquery)
* [gearQuery](_app_cart_cart_component_.cartcomponent.md#private-gearquery)
* [items](_app_cart_cart_component_.cartcomponent.md#private-items)

### Accessors

* [Items](_app_cart_cart_component_.cartcomponent.md#items)

### Methods

* [getGear](_app_cart_cart_component_.cartcomponent.md#getgear)
* [ngOnInit](_app_cart_cart_component_.cartcomponent.md#ngoninit)

## Constructors

###  constructor

\+ **new CartComponent**(`cartQuery`: [CartQuery](_app_cart_cart_query_.cartquery.md), `gearQuery`: [GearQuery](_app_gear_gear_query_.gearquery.md)): *[CartComponent](_app_cart_cart_component_.cartcomponent.md)*

*Defined in [src/app/cart/cart.component.ts:16](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/cart/cart.component.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`cartQuery` | [CartQuery](_app_cart_cart_query_.cartquery.md) |
`gearQuery` | [GearQuery](_app_gear_gear_query_.gearquery.md) |

**Returns:** *[CartComponent](_app_cart_cart_component_.cartcomponent.md)*

## Properties

### `Private` cartQuery

• **cartQuery**: *[CartQuery](_app_cart_cart_query_.cartquery.md)*

*Defined in [src/app/cart/cart.component.ts:17](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/cart/cart.component.ts#L17)*

___

### `Private` gearQuery

• **gearQuery**: *[GearQuery](_app_gear_gear_query_.gearquery.md)*

*Defined in [src/app/cart/cart.component.ts:17](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/cart/cart.component.ts#L17)*

___

### `Private` items

• **items**: *[Cart](../interfaces/_app_cart_cart_model_.cart.md)[]*

*Defined in [src/app/cart/cart.component.ts:16](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/cart/cart.component.ts#L16)*

**`param`** items in the Cart

## Accessors

###  Items

• **get Items**(): *[Cart](../interfaces/_app_cart_cart_model_.cart.md)[]*

*Defined in [src/app/cart/cart.component.ts:28](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/cart/cart.component.ts#L28)*

**Returns:** *[Cart](../interfaces/_app_cart_cart_model_.cart.md)[]*

## Methods

###  getGear

▸ **getGear**(`id`: number): *[Gear](../interfaces/_app_gear_gear_model_.gear.md)*

*Defined in [src/app/cart/cart.component.ts:32](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/cart/cart.component.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *[Gear](../interfaces/_app_gear_gear_model_.gear.md)*

___

###  ngOnInit

▸ **ngOnInit**(): *void*

*Defined in [src/app/cart/cart.component.ts:19](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/cart/cart.component.ts#L19)*

**Returns:** *void*
