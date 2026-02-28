/**
 * DatingOS App - Premium interactions
 */

const CONVERSATIONS = {
  sarah: {
    name: 'Sarah',
    avatar: 'S',
    platform: 'Tinder',
    lastActive: '2h ago',
    attraction: 72,
    insights: {
      personality: 'Curious, engaged, career-minded. Asks follow-up questions—shows genuine interest. Likely works in a creative or professional field.',
      goals: 'Meeting interesting people, building real connections. Not just swiping for validation.',
      values: 'Authenticity, ambition, good conversation. Appreciates people who have their act together.',
      tips: ['She asked what you do—reciprocate and ask about her work', 'Keep it light but show you have substance', 'She responds to genuine curiosity', 'Tech/design overlap could be a good topic—she seems interested']
    },
    investment: 50,
    investmentLabel: 'Balanced',
    ghostRisk: 'Low',
    messages: [
      { from: 'them', text: "Hey! How's your week going?" },
      { from: 'you', text: 'Pretty good, just wrapped a big project' },
      { from: 'them', text: "That's awesome! What do you do?" }
    ],
    suggestions: [
      { tone: 'confident', text: "I'm in tech—product design. You?" },
      { tone: 'playful', text: "Software stuff, pretty boring 😅 What about you?" },
      { tone: 'direct', text: "I design apps. Currently working on something fun—tell you about it over coffee?" }
    ],
    altSuggestions: [
      { tone: 'playful', text: "Tech bro here 🙈 product design. You?" },
      { tone: 'confident', text: "I build apps. What do you do when you're not swiping?" },
      { tone: 'direct', text: "Product design. Your turn—what's your thing?" }
    ]
  },
  emma: {
    name: 'Emma',
    avatar: 'E',
    platform: 'Instagram',
    lastActive: '1d ago',
    attraction: 58,
    insights: {
      personality: 'Outdoorsy, appreciative, a bit guarded. Engaged with your hike photo but replies are short—"Haha that\'s so funny" felt like a deflection.',
      goals: 'Enjoys nature and visual content. Possibly casual about dating or has many options.',
      values: 'Adventure, aesthetics, low pressure. Doesn\'t want to feel pursued too hard.',
      tips: ['You\'ve sent 3 of last 4 messages—let her come to you', 'Don\'t double-text; she may need space', 'If re-engaging, reference something visual from her feed', 'Trails, photography, travel—stick to experiences she can relate to']
    },
    investment: 70,
    investmentLabel: 'You over-investing',
    ghostRisk: 'Medium',
    messages: [
      { from: 'them', text: 'Love that photo from the hike!' },
      { from: 'you', text: 'Thanks! It was an amazing trail' },
      { from: 'you', text: 'Have you been to that area?' },
      { from: 'them', text: "Haha that's so funny 😂" }
    ],
    suggestions: [
      { tone: 'confident', text: "No rush 🙂" },
      { tone: 'playful', text: "That hike was so good—any trail recs for next time?" },
      { tone: 'direct', text: "Whenever you're free!" }
    ],
    altSuggestions: [
      { tone: 'direct', text: "That trail was amazing btw—you been to any others lately?" },
      { tone: 'playful', text: "I'll be here when you're around 😊" },
      { tone: 'confident', text: "Take your time—no pressure" }
    ]
  },
  jess: {
    name: 'Jess',
    avatar: 'J',
    platform: 'Hinge',
    lastActive: '3d ago',
    attraction: 85,
    insights: {
      personality: 'Warm, decisive, coffee lover. Said yes to meeting—clearly interested. Low games, high enthusiasm.',
      goals: 'Actually meeting up, not endless texting. Values good vibes and local spots.',
      values: 'Directness, quality time, shared experiences. "Absolutely!" and "Sure!" = green lights.',
      tips: ['Lock in a specific time and place—she\'s ready', 'Mention a real coffee spot you know', 'Keep momentum; don\'t let the thread go cold', 'She mentioned oat latte—remember small details, she\'ll notice']
    },
    investment: 45,
    investmentLabel: 'Balanced',
    ghostRisk: 'Low',
    messages: [
      { from: 'you', text: 'That coffee shop you mentioned—worth the hype?' },
      { from: 'them', text: 'Absolutely! Best oat latte in town' },
      { from: 'you', text: "I'm sold. Want to grab one this weekend?" },
      { from: 'them', text: "Sure, coffee sounds good!" }
    ],
    suggestions: [
      { tone: 'confident', text: "Saturday works—how about 2pm at [place]?" },
      { tone: 'playful', text: "Perfect! I know a great spot. Saturday or Sunday?" },
      { tone: 'direct', text: "Awesome—I'll send you the details. Looking forward to it!" }
    ],
    altSuggestions: [
      { tone: 'playful', text: "Yes! How's Saturday afternoon? I'll find us a good spot" },
      { tone: 'direct', text: "Saturday 2pm—[coffee place]? I'll grab us a table." },
      { tone: 'confident', text: "Let's do Saturday. I'll text you the spot." }
    ]
  },
  lisa: {
    name: 'Lisa',
    avatar: 'L',
    platform: 'Hinge',
    lastActive: '12d ago',
    attraction: 68,
    insights: {
      personality: 'Creative, into photography, appreciates humor. Said you\'re "hilarious"—she liked your vibe. Compliments on her craft landed well.',
      goals: 'Growing as a portrait photographer. Open to meeting but convo went quiet—life got busy or she\'s shy to push forward.',
      values: 'Creativity, recognition of her work, genuine connection. She opened up about her passion—that\'s a good sign.',
      tips: ['Re-engage by referencing her photography—she cares about it', 'Ask about her latest projects or portraits', 'Light, specific opener works better than generic "hey"', 'You complimented her eye—she responded positively. More of that']
    },
    investment: 50,
    investmentLabel: 'Balanced',
    ghostRisk: 'Medium',
    messages: [
      { from: 'them', text: "You're hilarious 😂" },
      { from: 'you', text: "I try! So what do you do when you're not swiping?" },
      { from: 'them', text: 'Photography, mostly. Trying to get better at portraits' },
      { from: 'you', text: "That's cool—you have an eye for it" }
    ],
    suggestions: [
      { tone: 'confident', text: "Hey! Been a minute—saw that photo you posted. Still doing portraits?" },
      { tone: 'playful', text: "Random thought: we never got that coffee. Still up for it?" },
      { tone: 'direct', text: "Your photography came up on my feed. How's it going?" }
    ],
    altSuggestions: [
      { tone: 'playful', text: "Your portraits are so good—we still doing that coffee? 😄" },
      { tone: 'direct', text: "Saw your latest post. Still down for coffee sometime?" },
      { tone: 'confident', text: "Hey Lisa—meant to ask, still shooting? Let's grab coffee." }
    ]
  },
  maya: {
    name: 'Maya',
    avatar: 'M',
    platform: 'Instagram',
    lastActive: '3w ago',
    attraction: 42,
    insights: {
      personality: 'Social, event-goer, polite but non-committal. "Saved! 😊" is friendly but low urgency—she\'s not chasing.',
      goals: 'Networking, social life, keeping options open. May be juggling many connections from events.',
      values: 'Social proof, spontaneity, low commitment initially. Met at an event = she\'s comfortable in crowds.',
      tips: ['Reference something recent from her story or feed', 'Keep it casual—no pressure', 'One re-engage max; if no response, move on', 'Event context helps—"that event" gives you shared ground']
    },
    investment: 60,
    investmentLabel: 'Unknown',
    ghostRisk: 'High',
    messages: [
      { from: 'you', text: 'Great meeting you at the event!' },
      { from: 'them', text: 'You too! We should def hang sometime' },
      { from: 'you', text: "For sure—here's my number" },
      { from: 'them', text: 'Saved! 😊' }
    ],
    suggestions: [
      { tone: 'confident', text: "Hey Maya! Been a while—that event was fun. How's it going?" },
      { tone: 'playful', text: "Random thought: we exchanged numbers and never got coffee. Still down?" },
      { tone: 'direct', text: "Saw your story—looks like you've been busy! How's everything?" }
    ],
    altSuggestions: [
      { tone: 'playful', text: "We still doing that coffee from the event? 😊" },
      { tone: 'direct', text: "That event was fun—want to grab coffee this week?" },
      { tone: 'confident', text: "Hey Maya—saw your story. Let's finally get that coffee." }
    ]
  }
};

let currentConversationId = null;
let useAltSuggestions = false;

function getScoreClass(score) {
  if (score >= 61) return 'hot';
  if (score >= 31) return 'warm';
  return 'cold';
}

function showView(viewId) {
  // Hide all views
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('view-active');
  });
  
  // Show target view
  const view = document.getElementById(`view-${viewId}`);
  if (view) {
    view.classList.add('view-active');
  }

  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navItem = document.querySelector(`[data-view="${viewId}"]`);
  if (navItem) navItem.classList.add('active');

  // Show/hide back button and nav
  const backBtn = document.getElementById('btn-back');
  const titleEl = document.querySelector('.header-title');
  document.body.classList.toggle('nav-hidden', viewId === 'conversation');
  
  if (backBtn) {
    backBtn.style.display = viewId === 'conversation' ? 'flex' : 'none';
  }
  
  if (titleEl && viewId !== 'conversation') {
    titleEl.textContent = 'DatingOS';
    titleEl.href = '../index.html';
  }
}

function renderConversationDetail(id) {
  try {
    const data = CONVERSATIONS[id];
    if (!data) return;

    const view = document.getElementById('view-conversation');
    if (!view) return;

    // Update header
    const avatarEl = view.querySelector('.conv-detail-avatar');
    const nameEl = view.querySelector('.conv-detail-info h2');
    const metaEl = view.querySelector('.conv-detail-meta');
    if (avatarEl) avatarEl.textContent = data.avatar;
    if (nameEl) nameEl.textContent = data.name;
    if (metaEl) metaEl.textContent = `${data.platform} · Active ${data.lastActive}`;

    // Update metrics
    const attractionEl = view.querySelector('.metric-value.hot, .metric-value.warm, .metric-value.cold');
    if (attractionEl) {
      attractionEl.textContent = `${data.attraction}%`;
      attractionEl.className = `metric-value ${getScoreClass(data.attraction)}`;
    }

    const investmentEl = view.querySelector('.metric-card:nth-child(2) .metric-value');
    if (investmentEl) investmentEl.textContent = data.investmentLabel;

    const ghostEl = view.querySelector('.metric-card:nth-child(3) .metric-value');
    if (ghostEl) {
      ghostEl.textContent = data.ghostRisk;
      ghostEl.style.color = data.ghostRisk === 'Low' ? 'var(--success)' :
        data.ghostRisk === 'Medium' ? 'var(--warning)' : 'var(--danger)';
    }

    const barFill = view.querySelector('.bar-fill');
    if (barFill) barFill.style.width = `${data.investment}%`;

    // Update chat
    const chatThread = view.querySelector('.chat-thread');
    if (chatThread && data.messages) {
      chatThread.innerHTML = data.messages.map(m =>
        `<div class="chat-message ${m.from}"><span>${escapeHtml(m.text)}</span></div>`
      ).join('');
    }

    // Update person insights
    const insightsContent = view.querySelector('#person-insights-content');
    if (insightsContent) {
      if (data.insights) {
        const i = data.insights;
        insightsContent.innerHTML = `
          <div class="insight-block">
            <span class="insight-label">Personality</span>
            <p class="insight-text">${escapeHtml(i.personality || '')}</p>
          </div>
          <div class="insight-block">
            <span class="insight-label">Goals & values</span>
            <p class="insight-text">${escapeHtml(i.goals || '')}</p>
            <p class="insight-text insight-values">${escapeHtml(i.values || '')}</p>
          </div>
          <div class="insight-block insight-tips">
            <span class="insight-label">Conversation tips</span>
            <ul class="insight-tips-list">${(i.tips || []).map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul>
          </div>
        `;
      } else {
        insightsContent.innerHTML = '<p class="insight-empty">No insights yet. Upload more conversation to get AI analysis.</p>';
      }
    }

    renderSuggestions(id);
  } catch (err) {
    console.error('renderConversationDetail error:', err);
  }
}

function escapeHtml(text) {
  if (text == null) return '';
  const div = document.createElement('div');
  div.textContent = String(text);
  return div.innerHTML;
}

function renderSuggestions(id) {
  try {
    const data = CONVERSATIONS[id];
    if (!data) return;
    const list = document.getElementById('suggestion-list');
    if (!list) return;
    const suggestions = useAltSuggestions && data.altSuggestions ? data.altSuggestions : data.suggestions;
    if (!suggestions || suggestions.length === 0) return;
    const toneLabel = (t) => (t && t.charAt) ? t.charAt(0).toUpperCase() + t.slice(1) : '';
    list.innerHTML = suggestions.map(s =>
    `<button type="button" class="suggestion-btn" data-tone="${escapeHtml(s.tone)}">
      <span class="suggestion-tone">${toneLabel(s.tone)}</span>
      <span class="suggestion-text">${escapeHtml(s.text)}</span>
      <span class="suggestion-action">Use in chat</span>
    </button>`
  ).join('');
  list.querySelectorAll('.suggestion-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const textEl = this.querySelector('.suggestion-text');
      const text = textEl ? textEl.textContent : '';
      if (!text || !currentConversationId) return;
      const data = CONVERSATIONS[currentConversationId];
      data.messages.push({ from: 'you', text: text });
      const thread = document.getElementById('chat-thread');
      if (thread) {
        const bubble = document.createElement('div');
        bubble.className = 'chat-message you';
        bubble.innerHTML = '<span>' + text + '</span>';
        thread.appendChild(bubble);
        thread.scrollTop = thread.scrollHeight;
      }
      this.classList.add('used');
      this.querySelector('.suggestion-action').textContent = 'Added to chat';
    });
  });
  } catch (err) {
    console.error('renderSuggestions error:', err);
  }
}

function handleSuggestionClick(e) {
  const btn = e.currentTarget;
  const originalText = btn.textContent;
  
  btn.classList.add('copied');
  btn.textContent = '✓ Copied to clipboard';
  
  setTimeout(() => {
    btn.classList.remove('copied');
    btn.textContent = originalText;
  }, 1500);
}

function navigateToConversation(id) {
  currentConversationId = id;
  const data = CONVERSATIONS[id];
  renderConversationDetail(id);
  showView('conversation');
  const titleEl = document.querySelector('.header-title');
  if (titleEl && data) {
    titleEl.textContent = data.name;
    titleEl.href = '#';
  }
}

function simulateUpload(e) {
  if (e && e.target && (e.target.closest('.btn-upload-primary') || e.target.closest('.btn-upload-secondary'))) {
    e.stopPropagation();
  }
  const uploadZone = document.getElementById('upload-zone');
  if (!uploadZone || uploadZone.classList.contains('uploaded')) return;
  
  uploadZone.classList.add('uploaded');
  
  setTimeout(() => {
    uploadZone.classList.remove('uploaded');
  }, 2500);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Bottom nav (delegation so clicks on icon/label work)
  document.querySelector('.app-nav')?.addEventListener('click', (e) => {
    const item = e.target.closest('.nav-item');
    if (!item) return;
    e.preventDefault();
    const view = item.getAttribute('data-view');
    if (view) showView(view);
  });

  // Back button
  const backBtn = document.getElementById('btn-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      showView('dashboard');
    });
  }

  // Upload button in header
  const uploadBtn = document.getElementById('btn-upload');
  if (uploadBtn) {
    uploadBtn.addEventListener('click', () => {
      showView('upload');
    });
  }

  // Navigate to conversation detail
  document.querySelectorAll('[data-navigate="conversation"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const id = el.dataset.id;
      if (id) navigateToConversation(id);
    });
  });

  // "View all chats" card and any [data-view] link (e.g. more-link)
  document.querySelectorAll('.conv-card[data-view]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const view = el.dataset.view;
      if (view) showView(view);
    });
  });

  // Chats filter pills
  document.querySelectorAll('.chats-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chats-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Upload zone (hero) - click anywhere or buttons
  const uploadZone = document.getElementById('upload-zone');
  if (uploadZone) {
    uploadZone.addEventListener('click', (e) => {
      if (!e.target.closest('.btn-upload-primary') && !e.target.closest('.btn-upload-secondary')) {
        simulateUpload(e);
      }
    });
    
    uploadZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadZone.classList.add('drag-over');
    });
    
    uploadZone.addEventListener('dragleave', () => {
      uploadZone.classList.remove('drag-over');
    });
    
    uploadZone.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadZone.classList.remove('drag-over');
      simulateUpload();
    });
  }

  document.querySelector('.btn-upload-primary')?.addEventListener('click', simulateUpload);
  document.querySelector('.btn-upload-secondary')?.addEventListener('click', simulateUpload);

  // Change style button (conversation view)
  document.getElementById('change-style-btn')?.addEventListener('click', function() {
    useAltSuggestions = !useAltSuggestions;
    if (currentConversationId) renderSuggestions(currentConversationId);
  });

  // Add her reply
  const herReplyInput = document.getElementById('her-reply-input');
  const herReplyAdd = document.getElementById('her-reply-add');
  function addHerReply() {
    if (!currentConversationId || !herReplyInput) return;
    const text = (herReplyInput.value || '').trim();
    if (!text) return;
    const data = CONVERSATIONS[currentConversationId];
    if (!data) return;
    data.messages.push({ from: 'them', text: text });
    const thread = document.getElementById('chat-thread');
    if (thread) {
      const bubble = document.createElement('div');
      bubble.className = 'chat-message them';
      bubble.innerHTML = '<span>' + escapeHtml(text) + '</span>';
      thread.appendChild(bubble);
      thread.scrollTop = thread.scrollHeight;
    }
    herReplyInput.value = '';
  }
  herReplyAdd?.addEventListener('click', addHerReply);
  herReplyInput?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); addHerReply(); }
  });

  // Compose: send custom message
  const composeInput = document.getElementById('compose-input');
  const composeSend = document.getElementById('compose-send');
  function sendCustomMessage() {
    if (!currentConversationId || !composeInput) return;
    const text = (composeInput.value || '').trim();
    if (!text) return;
    const data = CONVERSATIONS[currentConversationId];
    if (!data) return;
    data.messages.push({ from: 'you', text: text });
    const thread = document.getElementById('chat-thread');
    if (thread) {
      const bubble = document.createElement('div');
      bubble.className = 'chat-message you';
      bubble.innerHTML = '<span>' + escapeHtml(text) + '</span>';
      thread.appendChild(bubble);
      thread.scrollTop = thread.scrollHeight;
    }
    composeInput.value = '';
  }
  composeSend?.addEventListener('click', sendCustomMessage);
  composeInput?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); sendCustomMessage(); }
  });

  // Acquire: "Mark done" challenge button
  document.querySelector('.challenge-btn')?.addEventListener('click', function() {
    const done = this.dataset.done === 'true';
    if (done) {
      this.dataset.done = 'false';
      this.textContent = 'Mark done';
      this.classList.remove('done');
    } else {
      this.dataset.done = 'true';
      this.textContent = 'Done ✓';
      this.classList.add('done');
    }
  });

  // Acquire: follow-back opener buttons (copy feedback)
  document.querySelectorAll('.followback-opener').forEach(btn => {
    btn.addEventListener('click', function() {
      const original = this.textContent;
      this.classList.add('copied');
      this.textContent = '✓ Copied—paste in DMs';
      setTimeout(() => {
        this.classList.remove('copied');
        this.textContent = original;
      }, 1800);
    });
  });

  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';

  // Wire nav, back, and open-chat so they work when opening file directly
  window.datingOSNav = showView;
  window.datingOSRenderChat = renderConversationDetail;
  window.datingOSOpenChat = function(id) {
    if (id) navigateToConversation(id);
  };
  window.datingOSBack = function() {
    showView('dashboard');
    const titleEl = document.querySelector('.header-title');
    if (titleEl) {
      titleEl.textContent = 'DatingOS';
      titleEl.href = '../index.html';
    }
  };
});
