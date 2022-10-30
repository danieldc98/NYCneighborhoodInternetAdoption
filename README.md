**NYC Neighborhood Internet Adoption**

We intend to explore how Internet availability, adoption, and usage vary across New York City. Modern American society has reached a point where the Internet is a driver of the economy and increasingly a necessity of modern life. Consequently, there has been a rapid expansion of Internet infrastructure and availability around the country. However, this expansion has not progressed uniformly across society. For this reason our hypothesis is that there may be inequity in Internet availability and adoption, especially in a city as stratified as New York City.

Source Data : https://opendata.cityofnewyork.us/
(Income, Internet and NYC Boroughs analysis)

To do this, we intend to use NYC's [Internet Master Plan: Adoption and Infrastructure Data by Neighborhood](https://data.cityofnewyork.us/City-Government/Internet-Master-Plan-Adoption-and-Infrastructure-D/fg5j-q5nk) dataset to look at dozens of variables related to Internet speed, reliability, usage, and physical infrastructure at a neighborhood level. Collected by NYC's Office of Technology and Innovation (OTI), this dataset contains detailed breakdowns of the state of Internet infrastructure and usage by city-recognized neighborhood. These range from obvious indicators of Internet usage ("Mobile Dependent Households (Percentage of Households)") to detailed accountings of infrastructure ("Number of Free Public Wi-Fi Access Points in a Pedestrian Corridor") to *really* detailed accountings of infrastructure ("Density of Poles Reserved and with Equipment Installed for Mobile Telecom Franchise"). As most digital public infrastructure must go through OTI for permits and oversight, we expect this data to offer an accurate accounting of the city's digital infrastructure. Furthermore, since OTI last updated this dataset in March of 2021, we expect this dataset to offer insights into Internet access during the Covid-19 pandemic, when the importance of online connectivity was at an all-time high.

**Description**

In order to understand more about the neighborhoods making up the rows of the Internet Master Plan dataset, we intend to join it with NYC's [Demographic Profiles of ACS 5 Year Estimates at the Neighborhood Tabulation Area (NTA) level](https://data.cityofnewyork.us/City-Government/Demographic-Profiles-of-ACS-5-Year-Estimates-at-th/8cwr-7pqn). Collected by the Department of City Planning (DCP), this dataset describes in detail the unique demographic, economic, housing, and social characteristics of every neighborhood within the Five Boroughs. Keyed on the same Neighborhood Tabulation Area codes as the Internet dataset, this data answers questions about each neighborhood's racial, ethnic, and linguistic diversity; their income and wealth distributions; their housing stock, rents, and densities; and their familial, educational, and disability chararacteristics. These categorical and continuous variables will add valuable context to each neighborhood's Internet availability and adoption — giving us an opportunity to explore and visualize patterns and correlations between the two. One limitation of this dataset is its recency. Aggregated over five years in the mid 2010s, this data is 5 years staler than the Internet Master Plan data. While this may bias our findings as they relate to neighborhoods that have undergone rapid demographic change during that interval, we do not expect this to invalidate our overall findings.

For our final project we have decided to explore internet availability around New York City. Society in the United States has reached a point where internet is widely available to everyone and is a driver of our economy. Along with this, we have seen a rapid growth in internet availability around the country. However, as history has shown, resources are often not equitably divulged across society. For this reason we believe that there may inequitable trends in internet availability (internet adoption) around New York City.

In order to test these aspects, we have gathered data from NYC Open Data that has information on internet adoption and availability by geographical area in New York City. This information paired with other datapoints in NYC Open Data that has demographic data based on geographic location across the city, will hopefully uncover these inequitable trends. 

The variables in the demographic data include:
- average income per neighborhood/borough
- population per neighborhood/borough
- etc.

The variables in the internet adoption data include:
- type of internet available in each neighborhood/borough
- speed of internet in each neighborhood/borough
- etc.

In both of these data sets there are borough and neighborhood code information. 
By combining the data on either of these columns we will be able to compare and contrast the 
demographic data with the internet adoption data. 

There are both quantitative and categorical data in these data sets so we will
potentially use a variety of visualization techniques to discover these trends and patterns. 

**Problem statement:**

Is there a trend in internet adoption based on demographic data across New York
City?

Together, these two datasets should allow us to explore how and why some New Yorkers enjoy world-class, ubiquitous access to the so-called information superhighway, while others still struggle to find any on ramps.

*This repo was initially generated from a bookdown template available here: https://github.com/jtr13/EDAVtemplate.*	




