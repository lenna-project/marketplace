const addPlugin = (plugin: string) => {
  let plugins = JSON.parse(localStorage.getItem("plugins") || "[]");
  if (!plugins.includes(plugin)) {
    plugins.push(plugin);
    localStorage.setItem("plugins", JSON.stringify(plugins));
  }
};

export { addPlugin };
