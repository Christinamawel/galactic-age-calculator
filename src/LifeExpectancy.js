export default function lifeExpectancy(country, gender) {
  if (gender === "male") {
    switch(country) {
      case("Switzerland"):
      return 82.1;
      case("Sweden"):
      return 81.5;
      case("Japan"):
      return 81.4;
      case("Australia"):
      return 80.9;
      case("Netherlands"):
      return 80.6;
      case("Canada"):
      return 80;
      case("France"):
      return 79.9;
      case("Belgium"):
      return 79.8;
      case("Austria"):
      return 79.7;
      case("United Kingdom"):
      return 79.4;
      case("Germany"):
      return 79;
      case("United States"):
      return 76.3;
      case("other"):
      return 80.4;
    }
  } else if (gender === "female") {
    switch(country) {
      case("Switzerland"):
      return 85.8;
      case("Sweden"):
      return 84.8;
      case("Japan"):
      return 87.5;
      case("Australia"):
      return 85;
      case("Netherlands"):
      return 83.7;
      case("Canada"):
      return 84.2;
      case("France"):
      return 85.9;
      case("Belgium"):
      return 84.3;
      case("Austria"):
      return 84.2;
      case("United Kingdom"):
      return 83.1;
      case("Germany"):
      return 83.7;
      case("United States"):
      return 81.4;
      case("other"):
      return 84.7;
    }
  } else {
    switch(country) {
      case("Switzerland"):
      return 83.95;
      case("Sweden"):
      return 83.15;
      case("Japan"):
      return 84.45;
      case("Australia"):
      return 82.95;
      case("Netherlands"):
      return 82.15;
      case("Canada"):
      return 82.1;
      case("France"):
      return 82.9;
      case("Belgium"):
      return 82.05;
      case("Austria"):
      return 81.95;
      case("United Kingdom"):
      return 81.25;
      case("Germany"):
      return 81.35;
      case("United States"):
      return 78.85;
      case("other"):
      return 82.55;
    }
  }
}