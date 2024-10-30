import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Korpa.css";

const Korpa = () => {
  const location = useLocation();
  const { state } = location;
  const selectedPackage = state?.package || "Nema izabranog paketa";
  const price = state?.price || 0;
  const duration = state?.duration || 0;

  const [isConfirming, setIsConfirming] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(price);

  const validCoupons = {
    POPUST10: 10,
    POPUST20: 20,
  };

  useEffect(() => {
    setFinalPrice(price - (price * discount) / 100);
  }, [discount, price]);

  const handleCouponApply = () => {
    if (validCoupons[coupon]) {
      setDiscount(validCoupons[coupon]);
      alert(
        `Kupon je primenjen! Ostvarujete popust od ${validCoupons[coupon]}%.`
      );
    } else {
      alert("Nevažeći kupon kod.");
      setDiscount(0);
    }
  };

  const handleBuyClick = () => {
    setIsConfirming(true);
  };

  const handleConfirmClick = () => {
    const packageData = {
      idpaket: state?.packageId || 0,
      name: selectedPackage,
      price: finalPrice,
      duration: duration,
    };

    // Slanje podataka na backend za kupovinu paketa
    fetch("http://localhost:5000/api/kupljenipaket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(packageData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Paket je uspešno kupljen!");
          setIsConfirming(false);
          setCoupon("");
          setDiscount(0);

          // Slanje podataka Zapier-u
          sendToZapier(packageData);
        } else {
          alert("Greška prilikom kupovine paketa.");
        }
      })
      .catch((error) => {
        console.error("Greška:", error);
      });
  };

  const sendToZapier = (packageData) => {
    fetch("https://hooks.zapier.com/hooks/catch/20563826/29f4k56/", {
      // Zameni sa svojim Zap ID
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: "purchase",
        details: {
          packageId: packageData.idpaket,
          packageName: packageData.name,
          price: packageData.price,
          duration: packageData.duration,
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Podaci uspešno poslati na Zapier.");
        } else {
          console.error("Greška prilikom slanja podataka na Zapier.");
        }
      })
      .catch((error) => {
        console.error("Greška:", error);
      });
  };

  const [showArrow, setShowArrow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="korpa">
      <h1>Korpa</h1>
      <div className="package-info">
        <p>
          Izabrani paket: <span>{selectedPackage}</span>
        </p>
        <p>
          Osnovna cena: <span>${price}</span>
        </p>
        {discount > 0 && (
          <p>
            Popust: <span>{discount}%</span>
          </p>
        )}
        <p>
          Ukupna cena: <span>${finalPrice}</span>
        </p>
        <p>
          Trajanje: <span>{duration} dana</span>
        </p>
      </div>

      <div className="coupon-section">
        <input
          type="text"
          placeholder="Unesite kupon kod"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button onClick={handleCouponApply}>Primeni Kupon</button>
      </div>

      {!isConfirming ? (
        <button className="button" onClick={handleBuyClick}>
          Kupi
        </button>
      ) : (
        <div className="confirmation-modal">
          <p>Da li želite da kupite ovaj paket za ${finalPrice}?</p>
          <button className="button confirm" onClick={handleConfirmClick}>
            Potvrdi
          </button>
        </div>
      )}

      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default Korpa;
