import { serviceData } from '@/../data';
import { iconComponents } from '@/components/SlideServices/slider-services'; // Asegúrate de importar el objeto con los iconos si lo usaste

describe("📝 Data - serviceData", () => {
  it("Debería ser un array y no estar vacío", () => {
    expect(Array.isArray(serviceData)).toBe(true);
    expect(serviceData.length).toBeGreaterThan(0);
  });

  /*it("Cada objeto debería tener las propiedades necesarias", () => {
    serviceData.forEach(item => {
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("description");
      expect(item).toHaveProperty("icon");
      expect(typeof item.title).toBe("string");
      expect(typeof item.description).toBe("string");
      expect(typeof item.icon).toBe("string"); // Ahora icon es un string y no un JSX.Element
    });
  });

  it("Los íconos deberían estar en el objeto de iconComponents", () => {
    serviceData.forEach(item => {
      expect(iconComponents[item.icon as keyof typeof iconComponents]).toBeDefined();
    });
  });*/
});
