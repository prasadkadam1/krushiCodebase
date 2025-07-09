    document.addEventListener("DOMContentLoaded", () => {
      if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
      }
    });

    function logout() {
      localStorage.removeItem("loggedIn");
      window.location.href = "login.html";
    }

    function scrollImages(direction) {
      const container = document.getElementById('imageScroll');
      const scrollAmount = container.offsetWidth * 0.9;
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }

    function openModal(key) {
      const data = {
        scheme: {
          title: "Scheme Access",
          body: `<p><strong>What is it?</strong> Central/state schemes like PMFBY, PM-KISAN.</p>
                  <p>The Indian government has launched several initiatives to promote Smart Farming, integrating advanced technologies like drones, AI, IoT, and precision tools into agriculture. Key schemes include:

                  Digital Agriculture Mission: Drives the use of digital tools such as AI, IoT, and blockchain to modernize farming.
                  PM Krishi Sinchayee Yojana (PMKSY): Supports smart irrigation systems like drip and sprinkler setups.
                  Sub Mission on Agricultural Mechanization (SMAM): Provides subsidies for modern equipment and precision farming tools.
                  National Mission for Sustainable Agriculture (NMSA): Encourages climate-smart practices using sensors and real-time data.
                  Kisan Drone Scheme: Offers subsidies for drones used in spraying, crop monitoring, and soil analysis.
                  Agri-Tech Infrastructure Fund: Aims to fund agri-tech startups working on smart farming innovations.
                  eNAM: A digital platform that enables farmers to sell produce online, improving access to markets.
                  These schemes aim to increase productivity, reduce resource use, and make agriculture more sustainable and tech-driven.
                  </p>
                 <p><strong>Benefits:</strong> Direct financial & tech support.Access to government agricultural schemes provides numerous benefits to farmers, especially in adopting modern and sustainable farming practices. These schemes offer financial support, subsidies, and training for the use of advanced tools like drones, IoT devices, and precision farming equipment. They help reduce the cost of inputs such as machinery, irrigation systems, and fertilizers, making modern farming more affordable. Access to these schemes also ensures that farmers are better informed about market trends, weather conditions, and climate-resilient techniques. In addition, schemes encourage innovation, boost crop productivity, and improve income security. Overall, easy access to agricultural schemes empowers farmers to modernize their methods, enhance efficiency, and contribute to a more sustainable and self-reliant agricultural ecosystem.
</p>
                 <p><strong>How:</strong> Apply online or via CSC with FarmSmart links.</p>`
        },
        mandi: {
          title: "Mandi Prices & Weather",
          body: `<p><strong>What is it?</strong> Live crop prices and local forecasts.</p>
                  <p>Mandi prices refer to the current market rates of agricultural produce in local markets, helping farmers decide when and where to sell their crops for the best profit. **Weather information** provides timely updates on rainfall, temperature, and climate conditions, allowing farmers to plan sowing, irrigation, and harvesting effectively. Together, real-time mandi prices and weather forecasts empower farmers to make informed, profitable, and climate-resilient decisions.</p> 
                 <p><strong>Benefits:</strong> Sell smart, avoid loss.Access to real-time **mandi prices and weather information** offers significant benefits to farmers. By knowing current market rates, farmers can choose the right time and location to sell their produce, ensuring better profits and avoiding distress sales. Accurate weather forecasts help in planning crucial farming activities such as sowing, irrigation, fertilization, and harvesting. This reduces the risk of crop loss due to unexpected weather events like droughts or storms. Additionally, these tools support smarter use of resources like water and fertilizers, making farming more efficient and sustainable. Overall, the integration of mandi price data and weather updates empowers farmers to make informed decisions, increase productivity, and adopt climate-resilient farming practices.
</p>
                 <p><strong>How:</strong> Dashboard or FarmSmart app.</p>`
        },
        irrigation: {
          title: "Smart Irrigation",
          body: `<p><strong>What is it?</strong> Sensor-based water scheduling. Smart Irrigation is an advanced farming technique that uses modern technologies like sensors, weather data, and automated systems to optimize water usage in agriculture. It delivers the right amount of water to crops at the right time, based on real-time soil moisture, weather conditions, and crop needs. This system helps conserve water, reduce manual effort, and increase crop efficiency.

</p>
                 <p><strong>Benefits:</strong> Water saving, higher yield. Smart irrigation offers multiple benefits that significantly enhance agricultural productivity and sustainability. By using sensors, weather forecasts, and automated systems, it ensures that crops receive the right amount of water at the right time, reducing both over-irrigation and water wastage. This precise control not only conserves water but also promotes healthier crop growth and higher yields. It reduces the dependency on manual labor, saving time and effort for farmers. Additionally, smart irrigation helps cut down on electricity and water costs, making farming more economical. By relying on real-time data, farmers can make informed decisions tailored to specific crop and soil needs. Overall, smart irrigation supports efficient water management, lowers environmental impact, and contributes to more sustainable and climate-resilient farming practices.
</p>
                 <p><strong>How:</strong> With IoT and mobile sync tools.</p>`
        },
        tools: {
          title: "Digital Farm Tools",
          body: `<p><strong>What is it?</strong> Apps for pest alerts, fertilizer advice. Digital farm tools refer to technology-driven solutions used in agriculture to improve efficiency, productivity, and decision-making. These tools include mobile apps, GPS systems, sensors, drones, satellite imaging, AI-based platforms, and farm management software. They help farmers monitor crops, track soil health, manage irrigation, forecast weather, access market prices, and even automate tasks like spraying and harvesting. Digital tools are transforming traditional farming into smart, data-driven agriculture.

</p>
                 <p><strong>Benefits:</strong> Better crop planning. Digital farm tools offer numerous benefits by enabling farmers to make informed and timely decisions. These tools help monitor soil conditions, crop health, and weather patterns, allowing for precise planning and resource management. With real-time access to market prices and government schemes, farmers can optimize their sales and gain financial support. Automation through digital tools reduces labor costs and increases productivity, while technologies like drones and sensors improve accuracy in tasks such as spraying and crop monitoring. Overall, digital farm tools enhance efficiency, reduce waste, boost yields, and promote sustainable and profitable farming.</p>
                 <p><strong>How:</strong> Use tools in FarmSmart App.</p>`
        },
        soil: {
          title: "Soil Testing",
          body: `<p><strong>What is it?</strong> Know soil nutrients & pH. Soil testing is the scientific analysis of soil to determine its nutrient content, pH level, moisture, and overall health. It helps identify deficiencies or excesses of essential nutrients such as nitrogen, phosphorus, and potassium. By understanding the soil's condition, farmers can make informed decisions about fertilizer use, crop selection, and land management. Soil testing is an important step in sustainable and efficient farming.

</p>
                 <p><strong>Benefits:</strong> Accurate fertilizer use. Soil testing offers several key benefits that contribute to better crop management and increased agricultural productivity. It helps farmers understand the nutrient status and pH level of their soil, allowing them to apply the right type and amount of fertilizers. This not only reduces input costs but also prevents overuse of chemicals, protecting the environment and soil health. Soil testing also aids in selecting suitable crops for specific soil types, leading to improved yields and quality. Regular testing promotes long-term soil fertility and supports sustainable farming by ensuring balanced nutrient management and efficient resource use.</p>
                 <p><strong>How:</strong> Test kits or Krishi labs.</p>`
        },
        machinery: {
          title: "Machinery Marketplace",
          body: `<p><strong>What is it?</strong> Buy/rent tractors, sprayers, etc. A Machinery Marketplace is a digital or physical platform where farmers can buy, sell, or rent agricultural machinery and equipment. These marketplaces include websites, mobile apps, and government-supported platforms that offer access to tools such as tractors, harvesters, tillers, and sprayers. They help bridge the gap between equipment suppliers and farmers, especially smallholders who may not afford to buy machines outright.</p>
                 <p><strong>Benefits:</strong> Lower cost, easy access. Machinery marketplaces provide farmers with easy and affordable access to modern agricultural equipment, significantly improving productivity and reducing labor efforts. By offering options to rent or purchase machinery, these platforms support cost-effective farming, especially for small and marginal farmers who cannot invest in expensive tools. They promote shared usage, reduce downtime, and enable farmers to choose machines best suited to their specific needs. Digital marketplaces also ensure transparency in pricing, availability, and reviews, making the process more reliable. Overall, machinery marketplaces help modernize farming practices, save time and resources, and promote efficient and inclusive agricultural growth.
                </p>
                 <p><strong>How:</strong> Via FarmSmart listings.</p>`
        },
        records: {
          title: "Farm Record Keeping",
          body: `<p><strong>What is it?</strong> Track expenses, harvests, profits. Farm record keeping involves systematically documenting all farming activities, including crop production, input usage, labor, expenses, income, machinery use, and weather data. It can be done using notebooks, spreadsheets, or digital farm management tools. Accurate records help farmers track performance, plan future activities, and make informed decisions for better productivity and profitability.
          </p>
                 <p><strong>Benefits:</strong> Financial planning and scheme eligibility. Farm record keeping offers numerous benefits by helping farmers manage their operations more effectively. By maintaining detailed records of inputs, expenses, yields, and sales, farmers can monitor profits and losses, identify trends, and improve budgeting. It also aids in making data-driven decisions regarding crop rotation, input application, and labor planning. Proper records are essential for accessing loans, insurance, and government schemes, as they serve as proof of income and land use. Additionally, record keeping supports transparency, reduces wastage, and ensures long-term farm sustainability. Overall, it is a powerful tool for improving farm efficiency, productivity, and financial stability.</p>
                 <p><strong>How:</strong> Log entries in MyFarm section.</p>`
        },
        advisory: {
          title: "Expert Advisory",
          body: `<p><strong>What is it?</strong> Talk to agri specialists online. Expert advisory in agriculture refers to guidance and support provided by agricultural scientists, extension officers, and agritech professionals to help farmers make informed decisions. This advice may cover areas such as crop selection, pest control, irrigation, fertilization, weather management, and market trends. Expert advisory is offered through farm visits, helplines, mobile apps, government portals, and digital platforms.</p>
                 <p><strong>Benefits:</strong> Right advice, better decisions. Expert advisory provides farmers with accurate, timely, and location-specific guidance that enhances decision-making across all stages of farming. By receiving professional input on crop management, pest control, and resource use, farmers can reduce risks, increase yields, and avoid costly mistakes. It also helps them adopt modern techniques and technologies suited to their soil and climate conditions. Access to expert advice ensures better farm planning, improves productivity, and boosts profitability. Additionally, expert guidance increases farmers’ awareness of government schemes, market demands, and climate-smart practices, making their farming more efficient, resilient, and future-ready.
                </p>
                 <p><strong>How:</strong> Book sessions on FarmSmart.</p>`
        },
        organic: {
          title: "Organic Practices",
          body: `<p><strong>What is it?</strong> Guide to chemical-free farming. Organic farming practices focus on cultivating crops and raising livestock without the use of synthetic fertilizers, pesticides, genetically modified organisms (GMOs), or chemical additives. Instead, they rely on natural processes such as composting, crop rotation, green manures, biological pest control, and organic feed. The goal is to promote soil health, biodiversity, and ecological balance while producing safe and nutritious food.</p>
                 <p><strong>Benefits:</strong> Premium price, healthy land. Organic farming offers several important benefits for both farmers and the environment. It improves soil fertility and structure through the use of natural compost and green manure, leading to healthier crops and long-term land sustainability. By avoiding synthetic chemicals, organic practices protect water sources, promote biodiversity, and reduce pollution. Organic produce is also healthier and chemical-free, meeting the growing demand for safe and eco-friendly food. For farmers, organic farming can reduce input costs and fetch premium prices in the market. Additionally, it builds climate resilience and contributes to sustainable agriculture by enhancing ecosystem balance and conserving natural resources.</p>
                 <p><strong>How:</strong> Follow guides and get certified.</p>`
        },
        marketplace: {
          title: "  ",
          body: `<p><strong>What is it?</strong> Sell produce directly to buyers. An E-Marketplace in agriculture is a digital platform where farmers can buy and sell agricultural products, inputs, and services online. These platforms include government initiatives like eNAM (National Agriculture Market), private apps, and websites that connect farmers directly with buyers, traders, and service providers. They offer transparent pricing, wider market access, and reduce the role of middlemen.
          </p>
                 <p><strong>Benefits:</strong> No middlemen, higher income. E-Marketplaces provide farmers with greater access to markets and fair prices for their produce by connecting them directly to buyers without intermediaries. These platforms enable farmers to compare prices, choose the best offers, and sell at the right time, increasing their income and bargaining power. They also offer access to quality seeds, fertilizers, equipment, and services from verified sellers. E-Marketplaces save time, reduce transportation costs, and provide transparency in transactions. Additionally, many platforms offer real-time price updates, demand forecasts, and digital payment options, making agriculture more profitable, efficient, and future-ready.</p>
                 <p><strong>How:</strong> List items via FarmSmart seller portal.</p>`
        }
      };
      document.getElementById('modal-title').innerText = data[key].title;
      document.getElementById('modal-body').innerHTML = data[key].body;
      document.getElementById('featureModal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('featureModal').style.display = 'none';
    }


  function openFeedbackForm() {
    document.getElementById('feedbackModal').style.display = 'flex';
  }

  function closeFeedbackForm() {
    document.getElementById('feedbackModal').style.display = 'none';
  }

  function submitFeedback() {
    const feedback = document.getElementById('feedbackText').value.trim();
    if (feedback === "") {
      alert("Please enter your feedback before submitting.");
      return;
    }

    alert("Thank you for your feedback!\n\nYour input: " + feedback);
    document.getElementById('feedbackText').value = "";
    closeFeedbackForm();
  }

