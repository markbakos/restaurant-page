
const Footer = () => {
  return(
      <div className="sticky bottom-0 left-0 flex w-full h-[3.5rem] bg-amber-700 z-50">
          <div className="flex flex-row items-center justify-center w-full">

              <div className="flex flex-row items-center">
                  <svg className="w-8 h-8" viewBox="0 0 20 20">
                      <path
                          d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"
                          fill="#FFFFFF"
                      />
                  </svg>
                  <a href="https://maps.app.goo.gl/fvonVmPipU5vC7Qe8" target="_blank">
                      <p className="text-white text-sm font-medium">4 Rue Malher, Paris, France</p>
                  </a>
              </div>

              <div className="flex flex-row items-center ml-10">
                  <svg className="w-8 h-8 fill-none stroke-white mr-2" viewBox="0 0 24 24" focusable="false"
                       aria-hidden="true">
                      <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      ></path>
                  </svg>
                  <a href="tel:+1 (234) 567-8910"><p className="text-white text-sm font-medium">+1 (234) 567-8910</p>
                  </a>
              </div>

              <div className="cursor-pointer flex flex-row items-center ml-10">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-white mr-2" focusable="false" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <p className="text-white text-sm font-medium">08:00 AM - 11:00 PM</p>
              </div>
          </div>
      </div>
  )
}

export default Footer