# ASP.NET Core2.1 Web API and Vue.JS Login with Register SPA

Creating basic Login and Register for Vue.JS that connects to ASP.NET Core Web API that uses JWT (Json Web Tokens) as the authentication security. When login request occurs, Web API will validate if the user's username and password are stored in the system, if it stored, a JWT token service from web api will generate a secured web token and pass it to web client. In the web client, there are validations to check if the token is valid or not, if not, the web client app will redirect the user to the login page.

## JwtTokenGenerator.cs

```
        ...
        public async Task<string> GenerateJwtTokenString(string username, string password)
        {
            var user = await authRepo.Login(username, password);

            var claims = new[]{
                new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
                new Claim(ClaimTypes.Name, user.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return await Task.FromResult(tokenHandler.WriteToken(token));
        }
        ...
```

For more, you can clone this repo: `https://github.com/deanilvincent/ASP.NET-Core2.1-WebAPI-and-Vue.JS-Login-with-Register-SPA.git`
