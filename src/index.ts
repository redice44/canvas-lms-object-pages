import * as PageAPI from '@redice44/canvas-lms-promise-pages';

import CanvasPage from './page';
import { CanvasPageData, ListOpts } from './interfaces';

export const newPage = ( courseId: number, data: CanvasPageData = {} ): CanvasPage =>

  new CanvasPage( courseId, data );

export const fetchPage = ( courseId: number, pageUrl: string ): Promise < CanvasPage > =>

  new CanvasPage( courseId ).fetch( pageUrl );

export const fetchPages = async ( courseId: number, listOptions: ListOpts = {} ): Promise < CanvasPage[] > =>

  Promise.all< CanvasPage >(

    ( await PageAPI.list( courseId, listOptions ) ).map( page => fetchPage( courseId, page.url ) )

  );
