export default ({ $config, route }, inject) => {
  inject("asset", (name) => $config.assetURL + name);
  inject("image_url", (name) => $config.imageURL + name);
};
