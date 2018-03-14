import * as PageAPI from '@redice44/canvas-lms-promise-pages';

import { Page, CanvasPageData, PageState } from './interfaces';

export default class CanvasPage {

  public readonly courseId: number;
  private data: CanvasPageData;
  page: Page;
  state: PageState;

  constructor( courseId: number, data: CanvasPageData = {} ) {

    this.courseId = courseId;
    this.page = null;
    this.state = data ? PageState.Fresh : PageState.Empty;
    this.data = {

      url: data.url || null,
      title: data.title || 'Untitled Page',
      body: data.body || null,
      published: data.published || false,
      front_page: data.front_page || false

    };

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
      this.state = PageState.Fresh;
      this.data.url = this.page.url,
      this.data.title = this.page.title,
      this.data.body = this.page.body,
      this.data.published = this.page.published,
      this.data.front_page = this.page.front_page

    } catch( e ) {

      err = e;

    }

    return new Promise( ( resolve: ( value: CanvasPage ) => any, reject ) =>

      err ? reject( err ) : resolve( this )

    );

  }

  get(): CanvasPageData {

    return {

      url: this.data.url,
      title: this.data.title,
      body: this.data.body,
      published: this.data.published,
      front_page: this.data.front_page

    };

  }

  async save(): Promise < CanvasPage > {

    let err = null;

    try {

      this.page = await PageAPI.update( this.courseId, this.get() );
      this.state = PageState.Fresh;

    } catch( e ) {

      err = e;

    }

    return new Promise( ( resolve: ( value: CanvasPage ) => any, reject ) =>

      err ? reject( err ) : resolve( this )

    );

  }

  /* Accessors */

  get url(): string {

    return this.data.url;

  }

  set url( value: string ) {

    throw new Error( `Cannot manually set URL.` );

  }

  get title(): string {

    return this.data.title;

  }

  set title( value: string ) {

    if ( typeof value !== 'string' ) {

      throw new Error( `Cannot set title to ${ typeof value }. Expects string.` );

    }

    this.data.title = value;

  }

  get body(): string {

    return this.data.body ? this.data.body : '';

  }

  set body( value: string ) {

    if ( typeof value !== 'string' ) {

      throw new Error( `Cannot set body to ${ typeof value }. Expects string.` );

    }

    this.data.body = value;

  }

  get published(): boolean {

    return this.data.published;

  }

  set published( value: boolean ) {

    if ( typeof value !== 'boolean' ) {

      throw new Error( `Cannot set published to ${ typeof value }. Expects boolean.` );

    }

    this.data.published = value;

  }

  get frontPage(): boolean {

    return this.data.front_page;

  }

  set frontPage( value: boolean ) {

    if ( typeof value !== 'boolean' ) {

      throw new Error( `Cannot set frontPage to ${ typeof value }. Expects boolean.` );

    }

    this.data.front_page = value;

  }

}

