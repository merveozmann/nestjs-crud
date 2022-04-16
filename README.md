
# NestJS CRUD Application

There is an API that takes data from tmdb and performs crud operations.


## 

To run the application

```bash
  npm run start
```

  
## API OPERATIONS

#### All Movies List TMDB Api

```https
  GET http://localhost:3000/movies-list
```


#### Movie Detail TMDB Api

```http
  GET http://localhost:3000/movie-detail/{id}
```

| Parameter | Type     | 
| :-------- | :------- | 
| `id`      | `string` | 

#### Movie Save

```http
  POST http://localhost:3000/movies
```

| Parameter | Type     |
| :-------- | :------- | 
| `id`      | `string` | 
| `name`      | `string` | 
| `overview`      | `string` | 
| `popularity`      | `number` | 
| `voteAverage`      | `number` | 
| `VoteCount`      | `number` | 
| `relaseDate`      | `string` | 
| `genre`      | `Array` | 

#### Movie All

```http
  GET http://localhost:3000/movie
```

#### Movie Detail

```http
  GET http://localhost:3000/movie/{id}
```

| Parameter | Type     | 
| :-------- | :------- | 
| `id`      | `string` | 

#### Movie Delete

```http
  DELETE http://localhost:3000/movie/{id}
```

| Parameter | Type     | 
| :-------- | :------- | 
| `id`      | `string` | 


## SWAGGER API
#### To the run application swagger api

```https
  GET http://localhost:3000/api
```


![Uygulama Ekran Görüntüsü](https://github.com/merveozmann/nestjs-crud/blob/master/swagger.PNG)

  

## TEST

Run unit test for service and controller

```bash
  npm run test
```
Run e2e test for application

```bash
   npm run test:e2e
```
  
