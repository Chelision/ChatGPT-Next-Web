declare module 'pdfjs-dist/build/pdf' {
    export const GlobalWorkerOptions: {
      workerSrc: string;
    };
    type PDFDataSource = any;
    export function getDocument(url: string | Uint8Array | PDFDataSource): PDFLoadingTask;
  
    export interface PDFLoadingTask {
      promise: Promise<PDFDocumentProxy>;
    }
  
    export interface PDFDocumentProxy {
      numPages: number;
      getPage(pageNumber: number): Promise<PDFPageProxy>;
    }
  
    export interface PDFPageProxy {
      getTextContent(): Promise<TextContent>;
    }
  
    export interface TextContent {
      items: Array<TextItem>;
    }
    
    // 自定义 TextItem 类型
    export interface TextItem {
      str: string; // 文本内容
      // 这里可以根据需要添加其他字段
    } 
  }
  declare module 'pdfjs-dist/build/pdf.worker.entry' {
    const workerEntry: string;
    export default workerEntry;
  }
  