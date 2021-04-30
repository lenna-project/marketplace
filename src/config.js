const addPlugin = (plugin) => {
  let plugins = localStorage.getItem("plugins") || "[]";
  plugins = JSON.parse(plugins);
  if (!plugins.includes(plugin)) {
    plugins.push(plugin);
    localStorage.setItem("plugins", JSON.stringify(plugins));
  }
};

export { addPlugin };
