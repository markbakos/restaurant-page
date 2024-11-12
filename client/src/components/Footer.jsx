import 'animate.css'

const Footer = () => {
  return(
      <footer className="animate__animated animate__slideInUp sticky bottom-0 left-0 flex w-full h-[3.5rem] bg-amber-700 z-50">

          {/*Desktop Footer*/}
          <footer className="sm:flex hidden flex-row items-center justify-center w-full">
              <address className="flex flex-row items-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 mr-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g stroke-width="0"></g>
                      <g stroke-linecap="round" stroke-linejoin="round"></g>
                      <g>
                          <path
                              d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                              stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path
                              d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                              stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                  </svg>
                  <a href="https://maps.app.goo.gl/fvonVmPipU5vC7Qe8" target="_blank">
                      <p className="text-white text-sm font-medium">4 Rue Malher, Paris, France</p>
                  </a>
              </address>

              <div className="flex flex-row items-center ml-10">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 mr-2" fill="none">
                      <g stroke-width="0"></g>
                      <g stroke-linecap="round" stroke-linejoin="round"></g>
                      <g>
                          <path
                              d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                              stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                  </svg>
                  <a href="tel:+1 (234) 567-8910"><p className="text-white text-sm font-medium">+1 (234) 567-8910</p>
                  </a>
              </div>

              <time className="cursor-pointer flex flex-row items-center ml-10">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 mr-2">
                      <g stroke-width="0"></g>
                      <g stroke-linecap="round" stroke-linejoin="round"></g>
                      <g>
                          <path
                              d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                              stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                  </svg>
                  <p className="text-white text-sm font-medium">08:00 AM - 11:00 PM</p>
              </time>

              <div className="cursor-pointer flex flex-row items-center ml-10">
                  <svg fill="#FFFFFF" className="h-8 w-8 mr-2" viewBox="0 0 24 24">
                      <g stroke-width="0"></g>
                      <g stroke-linecap="round" stroke-linejoin="round"></g>
                      <g>
                          <path d="M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"></path>
                          <path d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z"></path>
                      </g>
                  </svg>
                  <p className="text-white text-sm font-medium">Our menu</p>
              </div>

              <div className="cursor-pointer flex flex-row items-center ml-10">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 mr-2"
                       fill="none" stroke="#FFFFFF">
                      <g stroke-width="0"></g>
                      <g stroke-linecap="round" stroke-linejoin="round"></g>
                      <g>
                          <rect x="6.27" y="1.5" width="15.27" height="17.18"></rect>
                          <polyline points="17.73 18.68 17.73 22.5 2.46 22.5 2.46 5.32 6.27 5.32"></polyline>
                          <line x1="9.14" y1="6.27" x2="18.68" y2="6.27"></line>
                          <line x1="9.14" y1="10.09" x2="18.68" y2="10.09"></line>
                          <line x1="9.14" y1="13.91" x2="14.86" y2="13.91"></line>
                      </g>
                  </svg>
                  <p className="text-white text-sm font-medium">Careers</p>
              </div>
          </footer>

          {/*Mobile Footer*/}

          <footer className="flex sm:hidden flex-row items-center justify-between w-full px-8">

              <a href="https://maps.app.goo.gl/fvonVmPipU5vC7Qe8" target="_blank">
                  <address className="flex flex-col items-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g stroke-width="0"></g>
                          <g stroke-linecap="round" stroke-linejoin="round"></g>
                          <g>
                              <path
                                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                                  stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                              <path
                                  d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                                  stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                          </g>
                      </svg>
                      <p className="text-white text-sm font-medium">Location</p>
                  </address>
              </a>

              <div className="flex flex-col items-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                      <g stroke-width="0"></g>
                      <g stroke-linecap="round" stroke-linejoin="round"></g>
                      <g>
                          <path
                              d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                              stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                  </svg>
                  <a href="tel:+1 (234) 567-8910"><p className="text-white text-sm font-medium">Call</p>
                  </a>
              </div>

              <time className="cursor-pointer flex flex-col items-center">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                      <g stroke-width="0"></g>
                      <g stroke-linecap="round" stroke-linejoin="round"></g>
                      <g>
                          <path
                              d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                              stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                  </svg>
                  <p className="text-white text-sm font-medium">Times</p>
              </time>

              <div className="cursor-pointer flex flex-col items-center">
                  <svg fill="#FFFFFF" className="h-8 w-8" viewBox="0 0 24 24">
                      <g stroke-width="0"></g>
                      <g stroke-linecap="round" stroke-linejoin="round"></g>
                      <g>
                          <path d="M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"></path>
                          <path d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z"></path>
                      </g>
                  </svg>
                  <p className="text-white text-sm font-medium">Our menu</p>
              </div>
          </footer>

      </footer>
  )
}

export default Footer