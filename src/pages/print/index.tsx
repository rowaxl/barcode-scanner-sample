import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    if (window.print) {
      window.print();
    }
  }, [])

  return (
    <main className="print-page">
      <div className="print-content">
        <h1>Sample Letter Size Print</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ height: "30px" }}>
              <th style={{ textAlign: "left" }}>Column 1</th>
              <th style={{ textAlign: "left" }}>Column 2</th>
              <th style={{ textAlign: "left" }}>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "30px" }}>
              <td>Row 1</td>
              <td>Row 1</td>
              <td>Row 1</td>  
            </tr>
            <tr style={{ height: "30px" }}>
              <td>Row 2</td>
              <td>Row 2</td>
              <td>Row 2</td>
            </tr>
            <tr style={{ height: "30px" }}>
              <td>Row 3</td>
              <td>Row 3</td>
              <td>Row 3</td>
            </tr>
            <tr style={{ height: "30px" }}>
              <td>Row 4</td>
              <td>Row 4</td>
              <td>Row 4</td>
            </tr>
            <tr style={{ height: "30px" }}>
              <td>Row 5</td>
              <td>Row 5</td>
              <td>Row 5</td>
            </tr>
            <tr style={{ height: "30px" }}>
              <td>Row 6</td>
              <td>Row 6</td>
              <td>Row 6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
