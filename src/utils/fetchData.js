import axios from "axios";

export const fetchData = async (url) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJFUzI1NiIsImtpZCI6IjAxRUtWUjM5WktERzVTWjNGU1JGQTE4QUVGXzE2MDE4ODAzMDMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjoxNjU3ODcxNzM0LCJqdGkiOiIwMUc4MEE4OVJZUzQ0VlRKQzRNUFc0SEEzOCIsImlhdCI6MTY1Nzg2ODEzNCwiaXNzIjoiaHR0cHM6Ly9hdXRoLmdpYW9oYW5ndGlldGtpZW0udm4iLCJzdWIiOiIwMUc1RTFSNVA2MFhBMUhQMzFNNVhUOVFISyIsInNjcCI6WyJvcGVuaWQiXSwic2lkIjoiaUdDeUZ0cjlSbnA3eE9NcTJnMGozZVV5Z2NDYTBZMUciLCJjbGllbnRfaWQiOiIwMUVLVlIzOVpLREc1U1ozRlNSRkExOEFFRiIsInR5cGUiOiJvYXV0aCJ9.bK7fxbRBJr0P82KfbWdnIKIW3wkz5FGFCi0pAHnIKQKNynz4Rw01WWv8_P-zquFRiESYsGgFgK-GD42HX5NbOQ",
    },
  };

  const { data } = await axios.get(url, config);
  return data?.data;
};
