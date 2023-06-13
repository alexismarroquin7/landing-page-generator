
"use client"
import { v4 as uuid } from 'uuid';
import { useReducer } from 'react';

const initialState = {
  profile: {
    image: {
      src: "",
      alt: "",
      title: ""
    },
    style: {
      border_radius: "circle"
    }
  },
  title: {
    text: "Shear Elegance Barbershop",
    style: {
      align: "left"
    }
  },
  description: {
    text: "Unleash your style, elevate your confidence—Shear Elegance Barbershop, where grooming becomes an art.",
    style: {
      align: "left"
    }
  },
  buttons: [
    {
      id: uuid(),
      type: "tel",
      text: "+1 (234) 567 - 8901"
    },
    {
      id: uuid(),
      type: "address",
      text: "123 Main St, City, State, 12345"
    },
    {
      id: uuid(),
      type: "email",
      text: "your@email.com"
    }
  ],
  socials: [
    {
      id: uuid(),
      type: "instagram",
      href: "#"
    },
    {
      id: uuid(),
      type: "twitter",
      href: "#"
    },
    {
      id: uuid(),
      type: "facebook",
      href: "#"
    }
  ]
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error('Unsupported action type');
  }
};


export const useLandingPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch
  }
}