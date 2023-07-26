function removeInitialArticles(name) {
    const articles = ["The", "A", "An"];
    const words = name.split("\n ");
    
    if (articles.includes(words[0])) {
      return words.slice(1).join(" \n");
    }
    
    return name;
  }
  
  function bandNamesSort(bandNames) {
    return bandNames.sort((a, b) => {
      const bandA = removeInitialArticles(a);
      const bandB = removeInitialArticles(b);
      
      return bandA.localeCompare(bandB);
    });
  }
  console.log(bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"]));
  console.log(bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"]));
  console.log(bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"]));

  