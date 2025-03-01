import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Page() {

  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFunction = useReactToPrint({ contentRef })

  useEffect(() => {
    if (contentRef.current) {
      setTimeout(() => {
        reactToPrintFunction()
      }, 1000)
    }
  }, [contentRef])

  return (
    <main className="print-page" ref={contentRef}>
      <div className="print-content page-break">
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
            <tr>
              <td>Row 1</td>
              <td>Row 1</td>
              <td>Row 1</td>  
            </tr>
            <tr>
              <td>Row 2</td>
              <td>Row 2</td>
              <td>Row 2</td>
            </tr>
            <tr>
              <td>Row 3</td>
              <td>Row 3</td>
              <td>Row 3</td>
            </tr>
            <tr>
              <td>Row 4</td>
              <td>Row 4</td>
              <td>Row 4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="print-content page-break">
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
            <tr>
              <td>Row 1</td>
              <td>Row 1</td>
              <td>Row 1</td>  
            </tr>
            <tr>
              <td>Row 2</td>
              <td>Row 2</td>
              <td>Row 2</td>
            </tr>
            <tr>
              <td>Row 3</td>
              <td>Row 3</td>
              <td>Row 3</td>
            </tr>
            <tr>
              <td>Row 4</td>
              <td>Row 4</td>
              <td>Row 4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="print-content page-break">
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
            <tr>
              <td>Row 1</td>
              <td>Row 1</td>
              <td>Row 1</td>  
            </tr>
            <tr>
              <td>Row 2</td>
              <td>Row 2</td>
              <td>Row 2</td>
            </tr>
            <tr>
              <td>Row 3</td>
              <td>Row 3</td>
              <td>Row 3</td>
            </tr>
            <tr>
              <td>Row 4</td>
              <td>Row 4</td>
              <td>Row 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
