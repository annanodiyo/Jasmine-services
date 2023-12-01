// import { TestBed } from '@angular/core/testing';

// import { SignupService } from './signup.service';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';

// describe('SignupService', () => {
//   let service: SignupService;
//   let httpMock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [SignupService],
//     });
//     service = TestBed.inject(SignupService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   it('should get Users', () => {
//     const mockUsers = {
//       Users: [
//         {
//           id: 'bd1cbc1d-28ca-4c25-a37f-e2642240a335',
//           firstname: 'steve',
//           lastname: 'odieki',
//           email: 'ondieki@gmail.com',
//           role: 'user',
//           password:
//             '$2b$05$doK7mvGfGeqiZQ64c/B.b.cRlHgJK..ZhxC9uXYSqPl8DjtkZM5bu',
//           isDeleted: false,
//         },
//         {
//           id: 'bd1cbc1d-28ca-4c25-a37f-e2642240a335',
//           firstname: 'steve',
//           lastname: 'odieki',
//           email: 'ondieki@gmail.com',
//           role: 'user',
//           password:
//             '$2b$05$doK7mvGfGeqiZQ64c/B.b.cRlHgJK..ZhxC9uXYSqPl8DjtkZM5bu',
//           isDeleted: true,
//         },
//       ],
//     };

//     // service. registerNewUser().subscribe(res=>{
//     //   expect(res).toEqual(mockUsers)

//     const req = httpMock.expectOne('http://localhost:4400/employee');
//     expect(req.request.method).toBe('GET');
//   });

//   it('should create an User', () => {
//     let mockUser = {
//       firstname: 'steve',
//       lastname: 'odieki',
//       email: 'ondieki@gmail.com',
//       password: '12345678',
//     };

//     service.createUser(mockUser).subscribe((res) => {
//       expect(res).toEqual({ message: 'User registered successfully' });
//     });

//     const req = httpMock.expectOne('http://localhost:4400/employee/register');
//     expect(req.request.method).toEqual('POST');
//     expect(req.request.body).toBe(mockUser);

//     req.flush({ message: 'User registered successfully' });
//   });
// })
