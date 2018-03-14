require( 'dotenv' ).load();

import * as CanvasPage from '../';

// import { PageReq } from '../interfaces';

main()

async function main() {

  const courseId = 335;
  const list = await CanvasPage.fetchPages( courseId, { search_term: 'api' } );
  // console.log( JSON.stringify( list ) );

  list.forEach( page => {

    page.body += ' update';

  } );

  const updatedList = await Promise.all( list.map( page => page.save() ) );

  console.log( JSON.stringify( updatedList ) );

  // const page = new CanvasPage( courseId );
  // const pageReq: PageReq = {

  //   title: 'api page',
  //   body: 'hi'

  // };

  // await page.fetch( 'api-page-2' );
  // // page.update( { body: 'bye' } );
  // await page.save();
  // // await canvasPage.del();


  // // await page.get( 'api-page' );
  // console.log( JSON.stringify( page.get() ) );

}
