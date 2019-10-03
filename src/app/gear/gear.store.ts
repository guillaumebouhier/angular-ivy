import { Injectable } from '@angular/core';
import { Gear } from './gear.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface GearState extends EntityState<Gear> {
  // filter: string;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'gears' })
export class GearStore extends EntityStore<GearState> {
  constructor() {
    super(/*{ filter: 'ALL' }*/);
    const gear1: Gear = {
      id: 0,
      brand: 'Ibanez',
      model: 'RG1570',
      imageUrl:
        'https://images.reverb.com/image/upload/s--wY470ddn--/f_auto,t_supersize/v1542532382/r3k2ktcleqjodl23inpw.jpg'
    };
    const gear2: Gear = {
      id: 1,
      brand: 'Ernie Ball Music Man',
      model: 'JP7',
      imageUrl:
        'https://images.reverb.com/image/upload/s--oKibNVBZ--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1460170475/ejke6uziv2djxwwvj5mz.jpg'
    };
    const gear3: Gear = {
      id: 2,
      brand: '.strandberg*',
      model: 'Boden Classic 6 Trem',
      imageUrl:
        'https://images.reverb.com/image/upload/s--DB0VuX_N--/f_auto,t_large/v1568112718/q4xhmtcqa64xbc9fe5gg.jpg'
    };
    const gear4: Gear = {
      id: 3,
      brand: 'Charvel',
      model: 'Guthrie Govan Signature',
      imageUrl:
        'https://images.reverb.com/image/upload/s--aVSVzDcj--/f_auto,t_supersize/v1565125389/cnn7pqepcdfbtetfejpw.jpg'
    };
    const gear5: Gear = {
      id: 4,
      brand: 'Abasi Guitars',
      model: 'Larada 7',
      imageUrl:
        'https://images.reverb.com/image/upload/s--GyLqVpU8--/f_auto,t_supersize/v1562382159/rjqf1hti5kqwgbzla0lf.jpg'
    };

    this.set([gear1, gear2, gear3, gear4]);
    this.add(gear5);
  }
}
