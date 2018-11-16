# drinkingBuddy
SOKAL Hackathon - Say Food Team

Main Feature
- Track alcohol/liquor consumption
- Find alcohol/liquor database/api and Crawl corresponding information
- Perform verbal drunk test
- Calculate alcohol blood level
- Get Uber rides
- Connect to Amazon to order & deliver alcohol
- Find drinking buddies near you (SNS, other dating sites)
- Suggest tips for less hangover: water intake, etc


Architecture
SPA (single-page application) : https://en.wikipedia.org/wiki/Single-page_application

 ----------      ---------     ----------     ---------
| Frontend |  - | Backend | - | Database | - | crawler |
 ----------      ---------     ----------     ---------
                     |              |
                 ----------    ----------------
                | OpenAPIs |  | Recommendation |
                 ----------    ----------------

Frontend
- Javascript, HTML, CSS / Angular, Bootstrap4
Backend
- Nodejs / expression
Database
- AWS Aurora/DynamoDB
- Crawler4j/Scrapy
OpenAPIs
- Google Map API/Custom Search
- Twitter API
- Uber API
- Etc

R&R
| Role | Name |
| --- | --- |
| Project Lead | Heesung Lena Shin |
| Frontend | Choonnoh Lee |
| Frontend | Kweon Mo |
| Backend | Chanshin Peter Park |
| Backend | Jungmin Seo |
| Database | Joseph Moon |


