[my-app](../README.md) › [Globals](../globals.md) › ["app/music-gear-library/music-gear-library.component"](../modules/_app_music_gear_library_music_gear_library_component_.md) › [MusicGearLibraryComponent](_app_music_gear_library_music_gear_library_component_.musicgearlibrarycomponent.md)

# Class: MusicGearLibraryComponent

## Hierarchy

* **MusicGearLibraryComponent**

## Index

### Constructors

* [constructor](_app_music_gear_library_music_gear_library_component_.musicgearlibrarycomponent.md#constructor)

### Properties

* [breakpointObserver](_app_music_gear_library_music_gear_library_component_.musicgearlibrarycomponent.md#private-breakpointobserver)
* [cards](_app_music_gear_library_music_gear_library_component_.musicgearlibrarycomponent.md#cards)
* [cartService](_app_music_gear_library_music_gear_library_component_.musicgearlibrarycomponent.md#private-cartservice)
* [gearQuery](_app_music_gear_library_music_gear_library_component_.musicgearlibrarycomponent.md#private-gearquery)
* [gearService](_app_music_gear_library_music_gear_library_component_.musicgearlibrarycomponent.md#private-gearservice)

### Accessors

* [Cards](_app_music_gear_library_music_gear_library_component_.musicgearlibrarycomponent.md#cards)
* [Store](_app_music_gear_library_music_gear_library_component_.musicgearlibrarycomponent.md#store)

### Methods

* [addToCart](_app_music_gear_library_music_gear_library_component_.musicgearlibrarycomponent.md#addtocart)

## Constructors

###  constructor

\+ **new MusicGearLibraryComponent**(`breakpointObserver`: BreakpointObserver, `gearQuery`: [GearQuery](_app_gear_gear_query_.gearquery.md), `gearService`: [GearService](_app_gear_gear_service_.gearservice.md), `cartService`: [CartService](_app_cart_cart_service_.cartservice.md)): *[MusicGearLibraryComponent](_app_music_gear_library_music_gear_library_component_.musicgearlibrarycomponent.md)*

*Defined in [src/app/music-gear-library/music-gear-library.component.ts:17](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/music-gear-library/music-gear-library.component.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`breakpointObserver` | BreakpointObserver |
`gearQuery` | [GearQuery](_app_gear_gear_query_.gearquery.md) |
`gearService` | [GearService](_app_gear_gear_service_.gearservice.md) |
`cartService` | [CartService](_app_cart_cart_service_.cartservice.md) |

**Returns:** *[MusicGearLibraryComponent](_app_music_gear_library_music_gear_library_component_.musicgearlibrarycomponent.md)*

## Properties

### `Private` breakpointObserver

• **breakpointObserver**: *BreakpointObserver*

*Defined in [src/app/music-gear-library/music-gear-library.component.ts:19](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/music-gear-library/music-gear-library.component.ts#L19)*

___

###  cards

• **cards**: *any*

*Defined in [src/app/music-gear-library/music-gear-library.component.ts:17](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/music-gear-library/music-gear-library.component.ts#L17)*

Based on the screen size, switch from standard to one column per row

___

### `Private` cartService

• **cartService**: *[CartService](_app_cart_cart_service_.cartservice.md)*

*Defined in [src/app/music-gear-library/music-gear-library.component.ts:22](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/music-gear-library/music-gear-library.component.ts#L22)*

___

### `Private` gearQuery

• **gearQuery**: *[GearQuery](_app_gear_gear_query_.gearquery.md)*

*Defined in [src/app/music-gear-library/music-gear-library.component.ts:20](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/music-gear-library/music-gear-library.component.ts#L20)*

___

### `Private` gearService

• **gearService**: *[GearService](_app_gear_gear_service_.gearservice.md)*

*Defined in [src/app/music-gear-library/music-gear-library.component.ts:21](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/music-gear-library/music-gear-library.component.ts#L21)*

## Accessors

###  Cards

• **get Cards**(): *any*

*Defined in [src/app/music-gear-library/music-gear-library.component.ts:59](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/music-gear-library/music-gear-library.component.ts#L59)*

**Returns:** *any*

___

###  Store

• **get Store**(): *[Gear](../interfaces/_app_gear_gear_model_.gear.md)[]*

*Defined in [src/app/music-gear-library/music-gear-library.component.ts:63](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/music-gear-library/music-gear-library.component.ts#L63)*

**Returns:** *[Gear](../interfaces/_app_gear_gear_model_.gear.md)[]*

## Methods

###  addToCart

▸ **addToCart**(`gearId`: number): *void*

*Defined in [src/app/music-gear-library/music-gear-library.component.ts:67](https://github.com/guillaumebouhier/angular-ivy/blob/c358683/src/app/music-gear-library/music-gear-library.component.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`gearId` | number |

**Returns:** *void*
