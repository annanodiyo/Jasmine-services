import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ProductsService } from './products.service'

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should get Products', () => {
    const mockProducts = {
      Products: [
        {
          id: '0829696f-3b6d-43bf-8cf8-3e043b268212',
          productName: 'ghfhggfh ',
          productDescription: 'dormans',
          price: 200000,
          productImageUrl:
            'https://itslivb.com/wp-content/uploads/2021/02/IMG_9682-800x1199.jpg',
          category: 'coffee',
          productStock: 4,
        },
        {
          id: '0829696f-3b6d-43bf-8cf8-3e043b268212',
          productName: 'ghfhggfh ',
          productDescription: 'dormans',
          price: 200000,
          productImageUrl:
            'https://itslivb.com/wp-content/uploads/2021/02/IMG_9682-800x1199.jpg',
          category: 'coffee',
          productStock: 4,
        },
      ],
    };

    service.getAllProducts().subscribe((res) => {
      expect(res).toEqual(mockProducts);
    });

    const req = httpMock.expectOne('http://localhost:3000/products/all');
    expect(req.request.method).toBe('GET');
  });

  it('should create product', () => {
    let mockProducts = {
      id: '1',
      productName: 'Woofer ',
      productDescription: 'Sayona Make Black',
      price: 200000,
      productImageUrl: 'tdedudsudsid',
      category: 'Electronics',
      productStock: 4,
    };

    service.addProduct(mockProducts).subscribe((res) => {
      expect(res).toEqual({ message: 'Product added successfully' });
    });

    const req = httpMock.expectOne('http://localhost:3000/products/new');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toBe(mockProducts);

    req.flush({ message: 'Product added  successfully' });
  });
});
