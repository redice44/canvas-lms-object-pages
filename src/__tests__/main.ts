require( 'dotenv' ).load();

import CanvasPage from '../';

import { PageReq } from '../interfaces';

main()

async function main() {

  const courseId = 335;
  const page = new CanvasPage( courseId );
  const pageReq: PageReq = {

    title: 'api page',
    body: 'hi'

  };

  await page.fetch( 'api-page-2' );
  page.update( { body: 'bye' } );
  await page.save();
  // await canvasPage.del();


  // await page.get( 'api-page' );
  console.log( JSON.stringify( page.get() ) );

}
