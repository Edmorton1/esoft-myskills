# TestService.UsersApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | 
[**usersIdGet**](UsersApi.md#usersIdGet) | **GET** /users/{id} | Адрес на конкретного пользователя
[**usersPost**](UsersApi.md#usersPost) | **POST** /users | 



## usersGet

> [User] usersGet()



### Example

```javascript
import TestService from 'test_service';

let apiInstance = new TestService.UsersApi();
apiInstance.usersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdGet

> User usersIdGet(id)

Адрес на конкретного пользователя

Выдаёт тестового пользователя

### Example

```javascript
import TestService from 'test_service';

let apiInstance = new TestService.UsersApi();
let id = 56; // Number | 
apiInstance.usersIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersPost

> User usersPost(userDTO)



### Example

```javascript
import TestService from 'test_service';

let apiInstance = new TestService.UsersApi();
let userDTO = new TestService.UserDTO(); // UserDTO | 
apiInstance.usersPost(userDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userDTO** | [**UserDTO**](UserDTO.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

