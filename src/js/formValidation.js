import { getLenis } from './lenisManager.js';

export function initFormValidation() {
  const form = document.getElementById('paddock-pass-form');
  const credentialModal = document.getElementById('credential-result-card');

  if (!form) return;

  const nameInput = document.getElementById('applicant-name');
  const callSignInput = document.getElementById('call-sign');
  const passwordInput = document.getElementById('security-passcode');
  const circuitSelect = document.getElementById('circuit-choice');
  const customNote = document.getElementById('custom-note');
  const safetyCheckbox = document.getElementById('safety-terms');

  const setError = (inputEl, errorElId, message) => {
    const errorEl = document.getElementById(errorElId);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
      errorEl.classList.add('visible');
    }
    if (inputEl) {
      inputEl.classList.add('input-error', 'border-red-500');
    }
  };

  const clearError = (inputEl, errorElId) => {
    const errorEl = document.getElementById(errorElId);
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
      errorEl.classList.remove('visible');
    }
    if (inputEl) {
      inputEl.classList.remove('input-error', 'border-red-500');
    }
  };

  // Real-time input listeners
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 3) {
        clearError(nameInput, 'error-name');
      }
    });
  }

  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      if (passwordInput.value.length >= 6) {
        clearError(passwordInput, 'error-passcode');
      }
    });
  }

  if (circuitSelect) {
    circuitSelect.addEventListener('change', () => {
      if (circuitSelect.value !== '') {
        clearError(circuitSelect, 'error-circuit');
      }
    });
  }

  if (safetyCheckbox) {
    safetyCheckbox.addEventListener('change', () => {
      if (safetyCheckbox.checked) {
        clearError(safetyCheckbox, 'error-safety');
      }
    });
  }

  if (customNote) {
    customNote.addEventListener('input', () => {
      if (customNote.value.trim().length >= 10) {
        clearError(customNote, 'error-note');
      }
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
      setError(nameInput, 'error-name', 'Full legal name must contain at least 3 characters.');
      isValid = false;
    } else {
      clearError(nameInput, 'error-name');
    }

    // Validate Passcode
    if (!passwordInput.value || passwordInput.value.length < 6) {
      setError(passwordInput, 'error-passcode', 'VIP security passcode must be at least 6 characters.');
      isValid = false;
    } else {
      clearError(passwordInput, 'error-passcode');
    }

    // Validate Circuit Selection
    if (!circuitSelect.value) {
      setError(circuitSelect, 'error-circuit', 'Please select a primary Grand Prix circuit.');
      isValid = false;
    } else {
      clearError(circuitSelect, 'error-circuit');
    }

    // Validate Radio (Membership Tier)
    const selectedTier = document.querySelector('input[name="membership-tier"]:checked');
    const tierError = document.getElementById('error-tier');
    if (!selectedTier) {
      if (tierError) {
        tierError.textContent = 'Please choose a membership access tier.';
        tierError.classList.remove('hidden');
      }
      isValid = false;
    } else if (tierError) {
      tierError.textContent = '';
      tierError.classList.add('hidden');
    }

    // Validate Safety Checkbox
    if (!safetyCheckbox.checked) {
      setError(safetyCheckbox, 'error-safety', 'You must agree to FIA Trackside Safety Regulations.');
      isValid = false;
    } else {
      clearError(safetyCheckbox, 'error-safety');
    }

    // Validate Custom Note
    if (!customNote.value.trim() || customNote.value.trim().length < 10) {
      setError(customNote, 'error-note', 'Please provide at least 10 characters detailing your request.');
      isValid = false;
    } else {
      clearError(customNote, 'error-note');
    }

    if (!isValid) return;

    // Generate VIP Credential Card
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    const passId = `MV01-${new Date().getFullYear()}-${randomHex}`;
    const applicantName = nameInput.value.trim();
    const callSign = callSignInput.value.trim() || 'DUTCH-01';
    const tierName = selectedTier ? selectedTier.value : 'Orange Army VIP';
    const circuitName = circuitSelect.options[circuitSelect.selectedIndex].text;

    const issuedPassId = document.getElementById('pass-id-display');
    const issuedName = document.getElementById('pass-name-display');
    const issuedCallSign = document.getElementById('pass-callsign-display');
    const issuedTier = document.getElementById('pass-tier-display');
    const issuedCircuit = document.getElementById('pass-circuit-display');
    const issuedTimestamp = document.getElementById('pass-timestamp-display');

    if (issuedPassId) issuedPassId.textContent = passId;
    if (issuedName) issuedName.textContent = applicantName;
    if (issuedCallSign) issuedCallSign.textContent = callSign;
    if (issuedTier) issuedTier.textContent = tierName;
    if (issuedCircuit) issuedCircuit.textContent = circuitName;
    if (issuedTimestamp) issuedTimestamp.textContent = new Date().toUTCString();

    if (credentialModal) {
      credentialModal.classList.remove('hidden');
      credentialModal.classList.add('flex', 'visible');

      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(credentialModal, { offset: -60, duration: 1.2 });
      } else {
        credentialModal.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // Reset / Issue Another Pass
  const resetBtn = document.getElementById('pass-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      if (credentialModal) {
        credentialModal.classList.add('hidden');
        credentialModal.classList.remove('flex', 'visible');
      }
      form.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
