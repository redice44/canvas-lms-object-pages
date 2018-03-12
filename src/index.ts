import * as PageAPI from '@redice44/canvas-lms-promise-pages';

import { Page, CanvasPageData, PageState } from './interfaces';

export default class CanvasPage {

  courseId: number;
  page: Page;
  data: CanvasPageData;
  state: PageState;

  constructor( courseId: number, data: CanvasPageData = null ) {

    this.courseId = courseId;
    this.data = data;
    this.page = null;
    this.state = data ? PageState.Fresh : PageState.Empty;

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
      this.data = {

        url: this.page.url,
        title: this.page.title,
        body: this.page.body,
        published: this.page.published,
        front_page: this.page.front_page

      };

    } catch( e ) {

      err = e;

    }

    return new Promise( ( resolve: ( value: CanvasPage ) => any, reject ) =>

      err ? reject( err ) : resolve( this )

    );

  }

  get(): CanvasPageData {

    return this.data;

  }

  update( pageData: CanvasPageData ): CanvasPage {

    this.state = PageState.Updated;
    this.data = pageData;

    return this;

  }

  async save(): Promise < CanvasPage > {

    let err = null;

    try {

      this.page = await PageAPI.update( this.courseId, this.data );
      this.state = PageState.Fresh;

    } catch( e ) {

      err = e;

    }

    return new Promise( ( resolve: ( value: CanvasPage ) => any, reject ) =>

      err ? reject( err ) : resolve( this )

    );

  }

}

