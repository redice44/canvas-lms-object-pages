import * as PageAPI from '@redice44/canvas-lms-promise-pages';

import { Page, PageReq, PageState, PageUpdateOptions } from './interfaces';

export default class CanvasPage {

  courseId: number;
  page: Page;
  state: PageState;

  constructor( courseId: number ) {

    this.courseId = courseId;
    this.page = null;
    this.state = PageState.Empty;

  }

  async create( page: PageReq ): Promise < CanvasPage > {

    let err = null;

    try {

      this.page = await PageAPI.create( this.courseId, page );

    } catch( e ) {

      err = e;

    }

    return new Promise( ( resolve: ( value: CanvasPage ) => any, reject ) =>

      err ? reject( err ) : resolve( this )

    );

  }

  async del(): Promise < CanvasPage > {

    let err = null;

    try {

      this.page = await PageAPI.del( this.courseId, this.page.url );
      this.state = PageState.Deleted;

    } catch( e ) {

      err = e;

    }

    return new Promise( ( resolve: ( value: CanvasPage ) => any, reject ) =>

      err ? reject( err ) : resolve( this )

    );

  }

  async fetch( pageUrl: string ): Promise < CanvasPage > {

    let err = null;

    try {

      this.page = await PageAPI.get( this.courseId, pageUrl );

    } catch( e ) {

      err = e;

    }

    return new Promise( ( resolve: ( value: CanvasPage ) => any, reject ) =>

      err ? reject( err ) : resolve( this )

    );

  }

  get(): Page {

    return this.page;

  }

  update( opts: PageUpdateOptions = {} ): CanvasPage {

    this.state = PageState.Updated;

    for ( const key in opts ) {

      this.page[ key ] = opts[ key ];

    }

    return this;

  }

  async save(): Promise < CanvasPage > {

    let err = null;

    try {

      await PageAPI.update( this.courseId, this.page );

    } catch( e ) {

      err = e;

    }

    return new Promise( ( resolve: ( value: CanvasPage ) => any, reject ) =>

      err ? reject( err ) : resolve( this )

    );

  }

}

