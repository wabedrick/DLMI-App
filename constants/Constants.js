import { useNavigation } from "@react-navigation/native";

export const colors = {
  COLOR_PRIMARY: "#f96163",
  COLOR_LIGHT: "#fff",
  COLOR_DARK: "#000",
  COLOR_DARK_ALT: "#262626",
};

export const users = [
  {
    id: 1,
    username: "Edrick",
    password: "Yesorno@12",
    phoneNumber: "0770444853",
  },

  {
    id: 2,
    username: "Remick",
    password: "Nooryes@12",
    phoneNumber: "0709605076",
  },
];

export const registerUser = (username, phoneNumber, password) => {
  const newUser = { username, phoneNumber, password };
  users.push(newUser);
};

export const members = [];

export function registerMember(
  firstname,
  lastname,
  phoneNumber,
  email,
  physicalLocation,
  gender,
  hasLocalChurch,
  heardUsFrom
) {
  const newMember = {
    firstname,
    lastname,
    phoneNumber,
    email,
    physicalLocation,
    gender,
    hasLocalChurch,
    heardUsFrom,
  };
  members.push(newMember);
}

export const weeklyEvents = [
  {
    id: "01",
    day: "Mon-Thur",
    event: "Morning Prayers",
    image: require("../assets/images/image1.jpeg"),
  },

  {
    id: "02",
    day: "Thursday",
    event: "Thoroughly Equipped",
    image: require("../assets/images/image1.jpeg"),
  },

  {
    id: "03",
    day: "Friday",
    event: "Prayer Service",
    image: require("../assets/images/image1.jpeg"),
  },

  {
    id: "04",
    day: "Saturday",
    event: "Anagkazo and Choir Practice",
    image: require("../assets/images/image1.jpeg"),
  },

  {
    id: "05",
    day: "Sunday",
    event: "Sunday Services",
    image: require("../assets/images/image1.jpeg"),
  },
];

export function ourFunction() {
  const navigation = useNavigation();

  const ourServices = [
    {
      id: 1,
      name: "Chatting",
      iconName: "comments",
      navigator: navigation.navigate("chat"),
    },

    {
      id: 2,
      name: "Missional Communities",
      iconName: "address-card",
      navigator: navigation.navigate("mcs"),
    },
    {
      id: 3,
      name: "Sermons",
      iconName: "file-video-o",
      navigator: navigation.navigate("sermons"),
    },

    {
      id: 4,
      name: "New Member",
      iconName: "registered",
      navigator: navigation.navigate("registerNew"),
    },

    {
      id: 5,
      name: "Church Members",
      iconName: "group",
      navigator: navigation.navigate("member"),
    },

    {
      id: 6,
      name: "Giving",
      iconName: "envelope",
      navigator: navigation.navigate("give"),
    },

    {
      id: 7,
      name: "Annoucements",
      iconName: "heart",
      navigator: navigation.navigate("annoucements"),
    },

    {
      id: 8,
      name: "About DLMI",
      iconName: "address-card-o",
      navigator: navigation.navigate("about"),
    },
  ];
  return ourServices;
}
